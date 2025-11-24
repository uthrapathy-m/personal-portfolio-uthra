import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Uthrapathy M',
  initials: 'UM'
}

export const ABOUT = {
  title: `DevOps Engineer specializing in cloud automation and scalable infrastructure. Based in Chennai, India 🇮🇳`,
  description: `I'm a results-driven DevOps Engineer with 3+ years of hands-on experience in designing, implementing, and optimizing cloud-native solutions. I specialize in automating complex deployment pipelines, orchestrating containerized applications, and building infrastructure as code that scales seamlessly.

My expertise lies in bridging the gap between development and operations teams, enabling continuous integration and delivery workflows that accelerate time-to-market while maintaining system reliability. I've successfully reduced deployment times by up to 85%, achieved 99.9% uptime across multi-cloud environments, and implemented cost optimization strategies that cut cloud spending by 40%.

Proficient in AWS and Azure cloud platforms, I leverage cutting-edge technologies including Kubernetes, Docker, Terraform, Ansible, and Jenkins to architect resilient, self-healing infrastructure. My approach combines DevOps best practices with security-first principles, implementing automated monitoring, logging, and disaster recovery solutions that ensure business continuity.

I'm passionate about GitOps methodologies, infrastructure automation, and helping organizations transform their software delivery lifecycle through modern DevOps practices.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/uthrapathym',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/uthrapathy-m',
    icon: LinkedInIcon
  },
  {
    title: 'Telegram',
    url: 'https://t.me/uthrapathym',
    icon: TelegramIcon
  },
  {
    title: 'Resume',
    url: '#',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:uthrapathy.m@example.com',
    icon: MailIcon
  },
  {
    title: 'Portfolio',
    url: '#',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Tech Solutions Pvt Ltd',
    link: '#',
    badges: ['Full-time'],
    jobs: [
      {
        title: 'Senior DevOps Engineer',
        start: 'Jan, 2023',
        end: 'Present',
        description: [
          'Lead DevOps initiatives for cloud migration and infrastructure automation',
          'Designed and implemented CI/CD pipelines reducing deployment time by 60%',
          'Managed multi-cloud environments on AWS and Azure with 99.9% uptime',
          'Mentored junior engineers on DevOps best practices and tools'
        ]
      }
    ]
  },
  {
    company: 'Cloud Innovations Inc',
    link: '#',
    badges: ['Full-time'],
    jobs: [
      {
        title: 'DevOps Engineer',
        start: 'Mar, 2021',
        end: 'Dec, 2022',
        description: [
          'Automated infrastructure provisioning using Terraform and Ansible',
          'Implemented monitoring solutions with Prometheus and Grafana',
          'Containerized applications using Docker and orchestrated with Kubernetes',
          'Established security scanning and compliance in CI/CD workflows'
        ]
      }
    ]
  },
  {
    company: 'StartUp Dynamics',
    link: '#',
    badges: ['Full-time'],
    jobs: [
      {
        title: 'Junior DevOps Engineer',
        start: 'Jun, 2020',
        end: 'Feb, 2021',
        description: [
          'Supported development teams with build and deployment automation',
          'Maintained Linux servers and troubleshot production issues',
          'Created documentation for deployment processes and system configurations',
          'Assisted in cloud resource management and cost optimization'
        ]
      }
    ]
  },
  {
    company: 'Anna University',
    link: '#',
    badges: ['Education'],
    jobs: [
      {
        title: 'Bachelor of Engineering - Computer Science',
        start: 'Aug, 2016',
        end: 'May, 2020',
        description: [
          'Graduated with First Class Honors specializing in Software Engineering',
          'Completed projects in cloud computing and distributed systems',
          'Active member of technical clubs and coding competitions'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const PROJECTS = [
  {
    title: 'Multi-Cloud Infrastructure Automation',
    tags: [TAGS.AWS, TAGS.AZURE, TAGS.TERRAFORM, TAGS.ANSIBLE],
    description: 'Automated infrastructure provisioning across AWS and Azure using Terraform modules and Ansible playbooks. Implemented cost optimization strategies reducing cloud spending by 40%.',
    link: {
      github: 'https://github.com/uthrapathym/multi-cloud-infra',
      preview: '#'
    },
  },
  {
    title: 'Kubernetes Microservices Platform',
    tags: [TAGS.KUBERNETES, TAGS.DOCKER, TAGS.AWS_EKS, TAGS.PROMETHEUS],
    description: 'Built a scalable microservices platform on AWS EKS with automated deployment pipelines, monitoring, and logging. Supports auto-scaling and zero-downtime deployments.',
    link: {
      github: 'https://github.com/uthrapathym/k8s-microservices',
      preview: '#'
    },
  },
  {
    title: 'CI/CD Pipeline with Security Scanning',
    tags: [TAGS.JENKINS, TAGS.GITHUB_ACTIONS, TAGS.DOCKER, TAGS.AWS],
    description: 'Comprehensive CI/CD pipeline with integrated security scanning, automated testing, and deployment to multiple environments. Reduced deployment failures by 85%.',
    link: {
      github: 'https://github.com/uthrapathym/secure-cicd-pipeline',
    },
  },
  {
    title: 'Infrastructure Monitoring Dashboard',
    tags: [TAGS.PROMETHEUS, TAGS.KUBERNETES, TAGS.AWS],
    description: 'Real-time monitoring solution using Prometheus, Grafana, and custom metrics for infrastructure health tracking and alerting.',
    link: {
      github: 'https://github.com/uthrapathym/monitoring-dashboard',
    },
  },
  {
    title: 'Automated Database Backup System',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.LINUX],
    description: 'Automated backup and disaster recovery system for databases with encryption, retention policies, and cross-region replication.',
    link: {
      github: 'https://github.com/uthrapathym/db-backup-automation',
    },
  },
  {
    title: 'Container Registry with Vulnerability Scanning',
    tags: [TAGS.DOCKER, TAGS.AWS, TAGS.KUBERNETES],
    description: 'Private container registry with automated vulnerability scanning, image signing, and policy enforcement for secure deployments.',
    link: {
      github: 'https://github.com/uthrapathym/secure-container-registry',
    },
  },
  {
    title: 'GitOps Deployment Pipeline',
    tags: [TAGS.KUBERNETES, TAGS.GITHUB_ACTIONS, TAGS.TERRAFORM, TAGS.AWS],
    description: 'GitOps-based continuous deployment workflow using ArgoCD and Flux for automated application delivery. Implements progressive rollouts with automatic rollback capabilities on failure.',
    link: {
      github: 'https://github.com/uthrapathym/gitops-pipeline',
    },
  },
  {
    title: 'Infrastructure Cost Optimization Tool',
    tags: [TAGS.AWS, TAGS.AZURE, TAGS.TERRAFORM, TAGS.LINUX],
    description: 'Cost analysis and optimization tool for cloud resources with automated recommendations. Identifies unused resources, right-sizing opportunities, and reserved instance optimization.',
    link: {
      github: 'https://github.com/uthrapathym/cloud-cost-optimizer',
      preview: '#'
    },
  },
  {
    title: 'Service Mesh Implementation with Istio',
    tags: [TAGS.KUBERNETES, TAGS.DOCKER, TAGS.AWS_EKS, TAGS.PROMETHEUS],
    description: 'Production-ready service mesh architecture using Istio for microservices communication. Features traffic management, security policies, observability, and distributed tracing with Jaeger.',
    link: {
      github: 'https://github.com/uthrapathym/istio-service-mesh',
    },
  },
  {
    title: 'Disaster Recovery Automation Framework',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.ANSIBLE, TAGS.LINUX],
    description: 'Comprehensive disaster recovery solution with automated failover, data replication, and recovery testing. Ensures business continuity with RPO under 15 minutes and RTO under 1 hour.',
    link: {
      github: 'https://github.com/uthrapathym/disaster-recovery-framework',
      preview: '#'
    },
  }
];

export const data = {
  avatar: AVATAR,
  about: ABOUT,
  links: LINKS,
  career: CAREER,
  projects: PROJECTS
}
