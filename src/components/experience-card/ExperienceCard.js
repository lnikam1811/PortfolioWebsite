import Experience from "./Experience"
import "./ExperienceCard.css"

const ExperienceCard = (props) => {
  const experienceArray = props.experienceArray

  const createExperience = (experience) => {
    return (
      <Experience
        key={experience.id}
        logoSource={experience.logo}
        timePeriod={experience.period}
        experienceTitle={experience.title}
        description={experience.description}
      />
    )
  }

  return (
    <div
      className={`card experience-card-${props.cardOrientation}`}
      id={props.cardID}
    >
      <div>
        <h2 className='experience-card-title'>{props.experienceType}</h2>
      </div>
      <div className={`experience-grid-${props.cardOrientation}`}>
        {experienceArray.map(createExperience)}
      </div>
    </div>
  )
}

export default ExperienceCard
