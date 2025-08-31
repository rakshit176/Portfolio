try {
    console.log("chat-page.js script started");

const resumeContent = `
RAKSHITH KUMAR K.N
rakshitkumarkn@gmail.com | LinkedIn/Rakshith | GitHub/Rakshith | +91 9008796644

EXPERIENCE
AI Engineer, August Al (Aug 2024 - Present)
- Developed and deployed AI-powered healthcare applications including automated patient interview systems, increasing medical data collection efficiency by 65% and reducing manual documentation time by 4 hours per patient, resulting in improved clinical workflow optimization across 3 major healthcare facilities.
- Implemented multi-agent healthcare Al systems for patient triage, clinical report summarization, and automated follow-ups, reducing clinician administrative burden by 45% and processing 2,500+ patient interactions daily, leading to improved patient satisfaction scores by 23%.
- Engineered NLP-driven medical documentation pipelines for automated report processing and structured data extraction, achieving 97% accuracy across 10,000+ clinical documents monthly, resulting in $150K annual cost savings through reduced manual review requirements.
- Optimized LLM memory management architecture for extended medical conversations, improving context retention and diagnostic accuracy by 75% through advanced prompt engineering and memory optimization techniques.
- Created and validated medical reasoning models for automated patient interview systems, achieving 91% accuracy in patient data capture across 5,000+ patient sessions, resulting in 40% reduction in initial consultation time and improved diagnostic consistency.
- Deployed HIPAA-compliant Al workloads serving 500+ concurrent users on AWS and Azure infrastructure with 99.99% uptime, implementing end-to-end encryption and role-based access controls, resulting in successful regulatory audits and enterprise client retention.

Machine Learning Engineer, Snive (Krut AI) (Jan 2024 - Aug 2024)
- Engineered end-to-end creative Al pipeline processing 50,000+ product images monthly for automated photography and content generation using Stable Diffusion and LLMs, resulting in 80% reduction in content creation costs for e-commerce clients.
- Implemented Fast UNet and VAE optimizations for diffusion models, reducing SDXL with ControlNet inference time to 1-2 seconds while maintaining high-quality output through advanced model compression techniques.
- Deployed production-ready APIs handling 10,000+ requests daily on AWS G4/G5 instances with intelligent queue-based resource allocation, achieving 99.9% uptime and $30K monthly infrastructure cost savings through optimized resource utilization.
- Optimized diffusion model memory usage for production workloads, reducing GPU memory consumption by 60% through gradient checkpointing and mixed-precision training, enabling cost-efficient scaling.

Associate Data Scientist, Lincode Labs Inc. (Mar 2022 - Jan 2024)
- Delivered computer vision solutions for 8 international manufacturing clients, implementing OCR, image segmentation, and object detection models under challenging lighting conditions, resulting in 25% improvement in production quality control across automotive and electronics sectors.
- Built high-accuracy OCR system for leading German electrical equipment manufacturer, achieving 92% accuracy with 0.25s inference time through custom preprocessing pipelines and GPU-optimized deployment strategies.
- Deployed real-time anomaly detection system processing 1,000+ surface inspections daily for automotive manufacturers, achieving 0.5s inference time with 96% detection accuracy, resulting in 30% reduction in defective products reaching market.
- Reduced API infrastructure costs by 90% through server-sent events implementation for real-time inference container updates, eliminating redundant polling and improving system responsiveness.
- Enhanced production inspection pipelines serving 15+ manufacturing facilities across US and global markets, achieving 1.15s batch inference speed and processing 50,000+ components daily, resulting in $2M annual savings through improved quality control efficiency.

Data Science Intern, Lincode Labs Inc. (Sep 2021 - Mar 2022)
- Conducted R&D on object detection and segmentation models, improving model accuracy by 15% and GPU memory efficiency by 30% across 20+ experimental architectures, contributing to 3 production deployments and establishing foundation for next- generation computer vision applications.
- Strengthened technical expertise in Python, PyTorch, TensorFlow, and data optimization frameworks, contributing to production- ready Al applications and establishing foundation for advanced computer vision development.

EDUCATION
- MSc, Big Data Analytics, St. Joseph's University, Bengaluru (2020 - 2022)
- BCA, Computer Applications, Seshadripuram College, Bengaluru (2016 - 2019)

PROJECTS
- Water Quality Prediction (IEEE Published): Predicted water quality index using BPNN, SVR, LSTM, applying WAWQI method on Ulsoor Lake dataset. Published in IEEE ACAI 2022.
- Hand Gesture Recognition: Built touchless interaction system using 3D CNN + LSTM, enabling real-time gesture-based digital control.

KEY SKILLS
- LLMs & Generative AI: OpenAI GPT-4/ChatGPT, Claude, Gemini, LLaMA, Mistral, Deepseek,RAG, Fine-tuning, PEFT, LORA, Prompt Engineering, Chain-of-Thought, Function Calling, Embeddings, MCP, A2A, Contextual Engineering,
- AI Frameworks & Tools: LangChain, LlamaIndex, Hugging Face, Transformers, Ollama, AutoGen, CrewAI, Semantic Kernel, Vector DBs (Pinecone, Chroma, Weaviate, Qdrant), Stable Diffusion, UnSloth, LamaCPP, Olama
- ML/DL & Programming: Python, PyTorch, TensorFlow, Scikit-learn, OpenCV, NumPy, Pandas, CUDA, TensorRT, Quantization, Pruning, Model Optimization
- AI Agents & Orchestration: Multi-Agent Systems, Tool Use, ReAct, Planning Algorithms, Memory Systems, Agent Communication, Workflow Automation, LangGraph
- Healthcare AI: Medical NLP, Clinical Decision Support, FHIR, HL7, HIPAA Compliance, Medical Imaging, Patient Data Processing, Regulatory AI (FDA)
- Cloud & MLOps: AWS (SageMaker, Bedrock, Lambda, Cloudfront, Loadbalancer, Autoscaling, AppRunner, Cloudwatch, EKS, EC2), Azure (OpenAI Service, AI foundry, Container apps), GCP, Kubernetes, Docker, MLflow, Weights & Biases, CI/CD, A/B Testing, Modal (GPU Instances)
- Data & APIs: Postgres, Clickhouse, Aurora RDS, FastAPI, REST/GraphQL, SQL, MongoDB, Redis, Elasticsearch, Data Pipelines, ETL, Real-time Processing, API Security, AWS WAF
`;

const agents = [
    {
      name: "Health Agent",
      description: "A wellness-focused agent that gives personalized advice on physical fitness, mental health, nutrition, and stress management.",
      prompt: {
        system: "You are a Health & Wellness AI Coach. Provide practical, safe, and science-backed health advice. Be empathetic and motivational. Avoid prescribing medication or replacing a doctor’s role.",
        rules: [
          "Keep responses supportive, simple, and motivating.",
          "Focus on fitness routines, diet tips, mindfulness, stress relief.",
          "Always remind the user to consult professionals for medical concerns."
        ],
        tone: "Friendly, supportive, positive"
      },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
    },
    {
      name: "Finance Agent",
      description: "An AI advisor that explains personal finance basics, budgeting, and financial planning strategies.",
      prompt: {
        system: "You are a Financial Guide. Explain finance concepts clearly and provide actionable budgeting and saving strategies.",
        rules: [
          "Keep advice simple and practical.",
          "Explain terms like investment, budgeting, loans in easy words.",
          "Avoid specific stock recommendations or financial risks."
        ],
        "tone": "Clear, practical, educational"
      },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>'
    },
    {
      name: "Marketing Agent",
      description: "An agent that provides marketing tips, content strategies, and brand-building insights.",
      prompt: {
        system: "You are a Marketing Mentor. Help users with branding, digital marketing, social media growth, and content strategy.",
        "rules": [
          "Offer creative yet practical marketing tips.",
          "Explain how to reach target audiences.",
          "Suggest tools and strategies for growth."
        ],
        "tone": "Creative, professional, engaging"
      },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>'
    },
    {
      name: "Resume Agent",
      description: "An agent that shares Rakshith Kumar K.N’s professional experience, skills, and achievements as an AI Engineer.",
      prompt: {
        system: "You are Rakshith Kumar K.N’s professional assistant. Answer questions about his career, skills, and achievements using his resume as the source.",
        "rules": [
          "Always speak in third person about Rakshith.",
          "Highlight experience: AI Engineer, Data Scientist, Machine Learning Engineer.",
          "Mention skills: LLMs, Computer Vision, MLOps, PySpark, Cloud.",
          "Emphasize 4+ years experience and passion for AI innovation."
        ],
        "tone": "Professional, confident, clear"
      },
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>'
    }
  ];

    const ChatPage = () => {
        const [conversations, setConversations] = React.useState(() => {
            const initialConversations = {};
            agents.forEach(agent => {
                initialConversations[agent.name] = [{ messages: [] }];
            });
            try {
                const storedConversations = localStorage.getItem('conversations');
                const parsedConversations = storedConversations ? JSON.parse(storedConversations) : initialConversations;
                agents.forEach(agent => {
                    if (!parsedConversations[agent.name] || parsedConversations[agent.name].length === 0) {
                        parsedConversations[agent.name] = [{ messages: [] }];
                    }
                });
                return parsedConversations;
            } catch (error) {
                console.error("Error parsing conversations from localStorage:", error);
                return initialConversations;
            }
        });

        const [currentAgentName, setCurrentAgentName] = React.useState(agents[0].name);
        const [currentConversationIndex, setCurrentConversationIndex] = React.useState(0);
        const [isSidebarOpen, setIsSidebarOpen] = React.useState(window.innerWidth > 768);
        const [isLoading, setIsLoading] = React.useState(false);
        const messageListRef = React.useRef(null);

        React.useEffect(() => {
            try {
                localStorage.setItem('conversations', JSON.stringify(conversations));
            } catch (error) {
                console.error("Error saving conversations to localStorage:", error);
            }
        }, [conversations]);

        React.useEffect(() => {
            // Auto-scroll to bottom when new messages are added or loading state changes
            if (messageListRef.current) {
                messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            }
        }, [conversations, currentAgentName, currentConversationIndex, isLoading]);

        React.useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth > 768 && !isSidebarOpen) {
                    setIsSidebarOpen(true);
                } else if (window.innerWidth <= 768 && isSidebarOpen) {
                    setIsSidebarOpen(false);
                }
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const handleSelectAgent = (agentName) => {
            setCurrentAgentName(agentName);
            setCurrentConversationIndex(0);
            if (window.innerWidth <= 768) {
                setIsSidebarOpen(false);
            }
        };

        const handleNewChat = () => {
            setConversations(prev => {
                const newConversations = { ...prev };
                if (!newConversations[currentAgentName]) {
                    newConversations[currentAgentName] = [];
                }
                newConversations[currentAgentName].push({ messages: [] });
                return newConversations;
            });
            setCurrentConversationIndex(conversations[currentAgentName] ? conversations[currentAgentName].length : 0);
        };

        const handleClearHistory = () => {
            setConversations(prev => {
                const newConversations = { ...prev };
                newConversations[currentAgentName] = [{ messages: [] }];
                return newConversations;
            });
            setCurrentConversationIndex(0);
        };

        const handleSendMessage = async (text) => {
            if (!text.trim() || isLoading) return;

            const newMessage = { text, sender: 'user' };
            
            setConversations(prev => {
                const newConversations = { ...prev };
                if (!newConversations[currentAgentName]) {
                    newConversations[currentAgentName] = [{ messages: [] }];
                }
                if (!newConversations[currentAgentName][currentConversationIndex]) {
                    newConversations[currentAgentName][currentConversationIndex] = { messages: [] };
                }
                newConversations[currentAgentName][currentConversationIndex].messages.push(newMessage);
                return newConversations;
            });

            setIsLoading(true);
            const selectedAgent = agents.find(agent => agent.name === currentAgentName);
            const currentMessages = conversations[currentAgentName][currentConversationIndex]?.messages || [];
            const updatedMessages = [...currentMessages, newMessage];
            const agentResponse = await getAgentResponse(selectedAgent, text, updatedMessages);
            setIsLoading(false);
            
            const newAgentMessage = { text: agentResponse, sender: 'agent' };
            
            setConversations(prev => {
                const newConversations = { ...prev };
                newConversations[currentAgentName][currentConversationIndex].messages.push(newAgentMessage);
                return newConversations;
            });
        };

        const testApiKey = async () => {
            const apiKey = 'AIzaSyDwX5NAuimLA-SoBwtPXuCWDlyP8uq37lw';
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: "hello"
                            }]
                        }]
                    })
                });
                if(response.ok) {
                    alert("API key is working!");
                } else {
                    const errorBody = await response.text();
                    alert(`API key test failed: ${errorBody}`);
                }
            } catch (error) {
                alert(`API key test failed: ${error.message}`);
            }
        }

        return (
            <div className={`chat-page-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                {window.innerWidth <= 768 && isSidebarOpen && (
                    <div className="overlay active" onClick={() => setIsSidebarOpen(false)}></div>
                )}
                <div className={`conversations-sidebar ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                        className={`sidebar-toggle-btn ${!isSidebarOpen ? 'sidebar-closed' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isSidebarOpen ? (
                                <>
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </>
                            ) : (
                                <>
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </>
                            )}
                        </svg>
                    </button>
                    <div className="sidebar-header">
                        <h2>Conversations</h2>
                    </div>
                    <button onClick={handleNewChat} className="new-chat-button glow-on-hover">
                        <span>New Chat</span>
                    </button>
                    <button onClick={handleClearHistory} className="clear-history-button glow-on-hover">
                        <span>Clear History</span>
                    </button>
                    <div className="conversation-list">
                        {conversations[currentAgentName] && conversations[currentAgentName].map((conv, index) => (
                            <div
                                key={index}
                                className={`conversation-item ${currentConversationIndex === index ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentConversationIndex(index);
                                    if (window.innerWidth <= 768) {
                                        setIsSidebarOpen(false);
                                    }
                                }}
                            >
                                <p>{conv.messages.length > 0 ? conv.messages[0].text : 'New Conversation'}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chat-main">
                     <div className="agent-selector">
                        {agents.map(agent => (
                            <button
                                key={agent.name}
                                className={`agent-item glow-on-hover ${currentAgentName === agent.name ? 'active' : ''}`}
                                onClick={() => handleSelectAgent(agent.name)}
                            >
                                <span dangerouslySetInnerHTML={{ __html: agent.icon }}></span>
                                <span>{agent.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="message-list" ref={messageListRef}>
                        {conversations[currentAgentName] && conversations[currentAgentName][currentConversationIndex] && conversations[currentAgentName][currentConversationIndex].messages.map((message, msgIndex) => (
                                <div key={msgIndex} className={`message ${message.sender}`}>
                                    {message.text}
                                </div>
                            ))}
                        {isLoading && (
                            <div className="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !isLoading) {
                                    handleSendMessage(e.target.value);
                                    e.target.value = '';
                                }
                            }}
                            disabled={isLoading}
                        />
                        <button onClick={testApiKey} className="glow-on-hover">Test API Key</button>
                    </div>
                </div>
            </div>
        );
    };

    const getAgentResponse = async (agent, message, conversationHistory = []) => {
        const apiKey = 'AIzaSyDwX5NAuimLA-SoBwtPXuCWDlyP8uq37lw';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;

        let prompt = `System: ${agent.prompt.system}\n`;
        prompt += `Rules: ${agent.prompt.rules.join(', ')}\n`;
        prompt += `Tone: ${agent.prompt.tone}\n`;

        if (agent.name === 'Resume Agent') {
            prompt += `Resume Content: ${resumeContent}\n`;
        }

        // Add conversation history for context
        if (conversationHistory.length > 1) {
            prompt += `\nPrevious conversation:\n`;
            const recentHistory = conversationHistory.slice(-6); // Include last 6 messages for context
            recentHistory.forEach((msg, index) => {
                if (index < recentHistory.length - 1) { // Don't include the current message
                    prompt += `${msg.sender === 'user' ? 'User' : 'Agent'}: ${msg.text}\n`;
                }
            });
            prompt += '\n';
        }

        prompt += `User: ${message}\nAgent:`

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error('Error response from Gemini API:', errorBody);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Error fetching from Gemini API:', error);
            return 'Sorry, I am having trouble connecting to the AI. Please try again later.';
        }
    };

    const root = ReactDOM.createRoot(document.getElementById('chat-root'));
    root.render(<ChatPage />);

    console.log("chat-page.js script finished");
} catch (error) {
    console.error("Error in chat-page.js:", error);
}
