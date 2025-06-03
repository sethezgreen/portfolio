const skillsList = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Vue.js',
  'Nuxt.js',
  'Node.js',
  'Express',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Git & GitHub',
  'RESTful APIs',
]

function Skills() {
  return (
    <div className="card w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 w-full">
        {skillsList.map((skill, index) => (
          <ul key={index}>
            <li className="self-center">{skill}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Skills
