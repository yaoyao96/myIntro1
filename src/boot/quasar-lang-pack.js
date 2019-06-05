// import something here

// leave the export, even if you don't use it
// export default async ({ app, router, Vue }) => {
//   // something to do
// }

// for when you don't specify quasar.conf.js > framework: 'all'
import { Quasar } from 'quasar'
// OTHERWISE:

export default async () => {
  const langIso = 'en-us' // ... some logic to determine it (use Cookies Plugin?)

  try {
    await import(`quasar/lang/${langIso}`)
      .then(lang => {
        Quasar.lang.set(lang.default)
      })
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
