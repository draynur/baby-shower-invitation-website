import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { fname, lname, email, phone, attending, guests, dietary, note, turnstileToken } = body

  if (!fname || !lname || !attending) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const verification = await $fetch<{ success: boolean }>('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: {
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    },
  })

  if (!verification.success) {
    throw createError({ statusCode: 400, statusMessage: 'Bot verification failed' })
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Sheet1!A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' }),
        fname,
        lname,
        email || '',
        phone || '',
        attending === 'yes' ? 'Attending' : 'Declining',
        guests,
        dietary || '',
        note || '',
      ]],
    },
  })

  return { success: true }
})
