const portfolioData = {
  name: 'Kunisetty Rushikesh',
  displayName: 'Rushikesh Kunisetty',
  titles: ['AI Engineer', 'AWS Certified Developer', 'Blockchain Developer'],
  tagline: 'Building AI systems, cloud solutions, and blockchain applications.',
  bio: [
    'I am an AI Engineer focused on building intelligent backend systems, AI-powered applications, and cloud-native solutions using AWS.',
    'My experience includes developing persistent-memory AI agents, autonomous cloud security systems, and cross-chain blockchain applications.',
    'I work across AI engineering, backend development, AWS services, and blockchain technologies to create scalable and production-ready systems.',
  ],
  email: 'rushikeshkunisetty@gmail.com',
  github: 'https://github.com/Rushikesh-5706',
  linkedin: 'https://www.linkedin.com/in/rushikeshkunisetty5706/',
  skills: [
    { name: 'Artificial Intelligence', category: 'AI & ML' },
    { name: 'Machine Learning', category: 'AI & ML' },
    { name: 'Amazon Bedrock', category: 'Cloud' },
    { name: 'System Design', category: 'Cloud' },
    { name: 'DynamoDB', category: 'Cloud' },
    { name: 'API Development', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Automated Testing', category: 'Backend' },
    { name: 'Blockchain', category: 'Web3' },
    { name: 'Smart Contract Development', category: 'Web3' },
  ],
  projects: [
    {
      id: 1,
      title: 'Persistent-Memory AI Academic Advisor',
      subtitle: 'MCP Server + Vector Search',
      description:
        'Built an AI academic advisor with persistent memory using an MCP architecture, SQLite, and vector search. Implemented Retrieval-Augmented Generation with ChromaDB and semantic search to maintain long-term contextual conversations across sessions.',
      stack: ['Python', 'LangChain', 'ChromaDB'],
      github:
        'https://github.com/Rushikesh-5706/Persistent-Memory-AI-Academic-Advisor-with-an-MCP-Server-and-Vector-Search',
      live: '',
      accent: 'purple',
    },
    {
      id: 2,
      title: 'Chainlink CCIP Cross-Chain NFT Bridge',
      subtitle: 'Metadata Preservation System',
      description:
        'Developed a cross-chain NFT bridge using Chainlink CCIP with a burn-and-mint mechanism for secure NFT transfers across blockchain networks. Preserved NFT metadata and ownership details during transfers using Solidity smart contracts and Foundry testing.',
      stack: ['Solidity', 'Chainlink', 'Foundry'],
      github:
        'https://github.com/Rushikesh-5706/Chainlink-CCIP-Cross-Chain-NFT-Transfer-with-Metadata-Preservation',
      live: '',
      accent: 'cyan',
    },
    {
      id: 3,
      title: 'AI SOC for AWS',
      subtitle: 'Autonomous Security Operations Center',
      description:
        'Built an AI-powered autonomous Security Operations Center on AWS using Amazon Bedrock, GuardDuty, Lambda, and DynamoDB. The system analyzes cloud security alerts, performs AI-based threat reasoning, and automates safe remediation actions in real time.',
      stack: ['Amazon Bedrock', 'AWS Lambda', 'DynamoDB'],
      github: 'https://github.com/Rushikesh-5706/ai-soc-aws',
      live: 'https://ai-soc.d14jdkihvvk2j.amplifyapp.com/',
      accent: 'purple',
    },
  ],
}

export default portfolioData
