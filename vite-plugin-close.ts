export default function ClosePlugin() {
  return {
    name: 'ClosePlugin', // required, will show up in warnings and errors

    // use this to catch errors when building
    buildEnd(error) {
      if (error) {
        // console.error('Error bundling')
        // console.error(error)
        process.exit(1);
      } else {
        // console.log('Build ended')
      }
    },

    // use this to catch the end of a build without errors
    // eslint-disable-next-line no-unused-vars
    closeBundle(_id: any) {
      // console.log('Bundle closed')
      process.exit(0);
    },
  };
}
