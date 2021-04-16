export default {
  name: 'funfacts',
  title: 'Fun facts',
  type: 'document',
  fields: [
    {
      name: 'funfacts',
      title: 'Fun Facts',
      type: 'array',
      of: [{type: 'funfact'}]
    },
  ],
}
