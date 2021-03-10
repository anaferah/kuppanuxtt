/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return `/${doc.lang}`
  }

  // if (doc.type === 'page') {
  //   return `/${doc.lang}/${doc.uid}`
  // }

  if (doc.type === 'privacy') {
    return `/${doc.lang}/privacy`
  }

  if (doc.type === 'contact') {
    return `/${doc.lang}/contact`
  }

  if (doc.type === 'about') {
    return `/${doc.lang}/about`
  }

  if (doc.type === 'terms__conditions') {
    return `/${doc.lang}/terms`
  }

  if (doc.type === 'dropshipping') {
    return `/${doc.lang}/dropshipping`
  }

  if (doc.type === 'products') {
    return `/${doc.lang}/products`
  }

  if (doc.type === 'pricing') {
    return `/${doc.lang}/pricing`
  }

  if (doc.type === 'faqs') {
    return `/${doc.lang}/faqs`
  }

  return '/not-found'
}