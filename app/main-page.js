//Create Binding context

exports.myFunction = args => {
    const page = args.object
    page.bindingContext = {
        message: "HelloWorld from JS!"
    }

    setTimeout(() => {
        page.bindingContext = {
            message: "Something else now"
        }
    }, 2000)
}