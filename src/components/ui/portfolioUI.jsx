/* eslint-disable react/prop-types */
export default function portfolioUI({projects}) {
    return (
    <div>
        {projects.map((project) => (
            <div key={project.key}>
                <img src={project.img} alt="image of project"></img>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link}>Link to website.</a>
                <a href={project.githublink}>Link to github repo.</a>
            </div>
        ))}
    </div>
    );
}