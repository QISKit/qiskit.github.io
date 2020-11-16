import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  Advocate,
  AdvocatesWorldRegion
} from '../store/modules/advocates'

import {
  getImageUrl,
  findImageAttachment
} from './airtable-conversion-utils'

const RECORD_FIELDS = Object.freeze({
  name: 'Name',
  city: 'City',
  country: 'Country',
  region: 'Continents',
  image: 'Please upload your photo for the Advocates Website',
  slackId: 'Slack Member Id',
  slackUsername: 'Slack Username'
} as const)

async function fetchAdvocates (apiKey: string): Promise<Advocate[]> {
  const { slackId } = RECORD_FIELDS
  const advocates: Advocate[] = []
  const base = new Airtable({ apiKey }).base('app8koO4BZifGFhCV')
  await base('Advocates').select({
    fields: Object.values(RECORD_FIELDS),
    filterByFormula: `AND({${slackId}})`
  }).eachPage((records, nextPage) => {
    for (const record of records) {
      const advocate = convertToAdvocate(record)
      advocates.push(advocate)
    }
    nextPage()
  })
  return Promise.resolve(advocates)
}

function convertToAdvocate (record: any): Advocate {
  return {
    name: getName(record),
    image: getImage(record),
    region: getRegion(record),
    city: getCity(record),
    country: getCountry(record),
    slackId: getSlackId(record),
    slackUsername: getSlackUsername(record)
  }
}

function getName (record: any): string {
  return record.get(RECORD_FIELDS.name)
}

function getImage (record: any): string {
  const fallbackImage = '/images/advocates/no-advocate-photo.png'
  const attachments = record.get(RECORD_FIELDS.image)
  const imageAttachment = attachments && findImageAttachment(attachments)
  const imageUrl = imageAttachment && getImageUrl(imageAttachment)
  return imageUrl || fallbackImage
}

function getCity (record: any): string {
  return record.get(RECORD_FIELDS.city)
}

function getCountry (record: any): string {
  return record.get(RECORD_FIELDS.country)
}

function getRegion (record: any): AdvocatesWorldRegion {
  return record.get(RECORD_FIELDS.region)
}

function getSlackId (record: any): string {
  return record.get(RECORD_FIELDS.slackId)
}

function getSlackUsername (record: any): string {
  return record.get(RECORD_FIELDS.slackUsername)
}

export {
  RECORD_FIELDS,
  fetchAdvocates,
  convertToAdvocate,
  getName,
  getImage,
  getCity,
  getCountry,
  getRegion,
  getSlackId,
  getSlackUsername
}
