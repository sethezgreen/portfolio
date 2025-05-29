import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

function Home() {
  return (
    <div>
      <Card className="text-left">
        <CardHeader className="flex justify-between">
          <div>
            <CardTitle>Seth Green</CardTitle>
            <CardDescription>Raleigh, NC</CardDescription>
          </div>
          <div>
            <a
              href="https://github.com/sethezgreen"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/sethezgreen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="lg" />
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            I am a Full-Stack Web Developer specializing in front end
            applications and automated testing suites.
          </p>
        </CardContent>
      </Card>
      <section className="container mx-auto px-4 py-8">
        <div className="container">
          <p>My Skills</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <div className="container">
          <p>Experience</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <div className="container">
          <p>Education</p>
        </div>
      </section>
    </div>
  )
}

export default Home
