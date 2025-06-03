function Education() {
  return (
    <div>
      <div className="card w-full text-left">
        <div>
          <p className="font-bold text-lg">Coding Bootcamp Certificate</p>
          <p>Coding Dojo</p>
        </div>
        <div className="mt-2">
          <p className="text-sm">July 2023 - February 2024</p>
          <p>Full-Stack Development Bootcamp</p>
          <ul className="list-disc pl-5 mt-2">
            <li>JavaScript, MERN</li>
            <li>Python, Flask, MySQL</li>
            <li>Java, Spring Boot</li>
          </ul>
        </div>
      </div>
      <div className="card w-full text-left">
        <div>
          <p className="font-bold text-lg">
            Bachelor of Science in Biochemistry
          </p>
          <p>East Carolina University</p>
        </div>
        <div className="mt-2">
          <p className="text-sm">August 2019 - May 2023</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Magna Cum Laude, GPA: 3.8/4.0</li>
            <li>Honors College Graduate</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
