import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 w-full justify-center p-8" >
      <a
        href="https://github.com/majaluoma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black"
      >
        <FaGithub size={24} />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/omajaluoma/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-blue-700"
      >
        <FaLinkedin size={24} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}