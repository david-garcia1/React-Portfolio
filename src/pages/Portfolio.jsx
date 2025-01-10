export default function portfolioUI({projects}) {
    return (
        <div>
        <p>This is the Portfolio Page</p>
        <portfolioUI projects={
            [
                {
                    key:1.,
                    img:'',
                    title: "weather app",
                    description: 'this is an application built using the weather API',
                    link: '',
                    githublink: 'https://github.com/david-garcia1/local-weather-tracker', 
                },
                {
                    key:2.,
                    img:'',
                    title: "",
                    description: '',
                    link: '',
                    githublink: '', 
                }
            ]
    
        } 
        />
        </div>
     );
    }