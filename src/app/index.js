class Application
{
    run()
    {
        $("body").transit({
            color:"white",
            background: "blue"
        });

        console.log("The application is running now ...");
    }
}

const app = new Application();
app.run();
