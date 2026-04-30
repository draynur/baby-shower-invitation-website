import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { fname, lname, email, phone, attending, guests, dietary, note } = body

  if (!fname || !lname || !attending) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const config = useRuntimeConfig()

  const auth = new google.auth.JWT({
    email: config.googleServiceAccountEmail as string,
    key: (config.googlePrivateKey as string).replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: config.googleSpreadsheetId as string,
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
