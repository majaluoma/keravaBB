import HoverInfo from './HoverInfo';
import humanIcon from '@/assets/badges/human.jpeg';
type Skill = {
  name: string;
  icon: string;
  description: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: Readonly<SkillBadgeProps>) {
  return (
    <HoverInfo text={skill.description}>
      <div className="relative size-12 rounded-full hover:brightness-125 hover:shadow-md shadow-black cursor-default bg-card">
        <img
          className="absolute h-full w-full rounded-full object-cover"
          src={skill.icon}
          alt={skill.name}
        />
      </div>
    </HoverInfo>
  );
}

export function ReactBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'React',
        icon: 'https://images.seeklogo.com/logo-png/50/3/react-logo-png_seeklogo-507247.png?v=1957819856616202896',
        description:
          'React is a JavaScript library for building user interfaces.',
      }}
    />
  );
}

export function TypescriptBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'TypeScript',
        icon: 'https://www.typescriptlang.org/icons/icon-48x48.png',
        description:
          'TypeScript is a strongly typed programming language that builds on JavaScript.',
      }}
    />
  );
}

export function GraphqlBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'GraphQL',
        icon: 'https://graphql.org/img/logo.svg',
        description:
          'GraphQL is a query language for APIs and a runtime for executing those queries.',
      }}
    />
  );
}

export function NodejsBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Node.js',
        icon: 'https://logodix.com/logo/1764875.png',
        description:
          "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      }}
    />
  );
}

export function MysqlBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'MySQL / MariaDB',
        icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
        description:
          'MySQL and MariaDB are open-source relational database management systems.',
      }}
    />
  );
}

export function SaltStackBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'SaltStack',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/SaltStack_logo.png',
        description:
          'SaltStack is a configuration management and orchestration tool.',
      }}
    />
  );
}

export function CPanelBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'cPanel',
        icon: 'https://img2.gratispng.com/20180920/rp/kisspng-logo-cpanel-brand-vector-graphics-computer-icons-dec-3-th-2-6-mojoglob-1713938352612.webp',
        description:
          'cPanel is a web hosting control panel software that provides a graphical interface for managing websites.',
      }}
    />
  );
}

export function WordPressBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'WordPress',
        icon: 'https://pngimg.com/uploads/wordpress/wordpress_PNG28.png',
        description:
          'WordPress is a free and open-source content management system for building websites and blogs.',
      }}
    />
  );
}

export function DockerBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Docker',
        icon: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
        description:
          'Docker is a platform for developing, shipping, and running applications in containers.',
      }}
    />
  );
}

export function LinuxBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Linux',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
        description:
          'Linux is an open-source operating system kernel used in a variety of distributions.',
      }}
    />
  );
}

export function GitHubActionsBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'GitHub Actions',
        icon: 'https://img.stackreaction.com/apps/logos/github_192.png',
        description:
          'GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.',
      }}
    />
  );
}

export function AWSBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Amazon Web services',
        icon: 'https://www.technix.in/wp-content/uploads/2013/08/aws.png',
        description:
          'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs.',
      }}
    />
  );
}


export function JavaBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Java',
        icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
        description: 'Java is a high-level, class-based, object-oriented programming language.',
      }}
    />
  );
}

export function SpringBootBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Spring Boot',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg',
        description: 'Spring Boot is an open-source Java framework used to create microservices.',
      }}
    />
  );
}

export function PostgresBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'PostgreSQL',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        description: 'PostgreSQL is a powerful, open-source relational database management system.',
      }}
    />
  );
}

export function ApacheBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Apache',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Apache_HTTP_server_logo_%282016%29.svg',
        description: 'Apache HTTP Server is a widely used open-source web server software.',
      }}
    />
  );
}

export function HumanBadge() {
  return (
    <SkillBadge
      skill={{
        name: 'Human',
        icon: humanIcon,
        description: 'Complicated biotechnical system with a lot of bugs.',
      }}
    />
  );
}