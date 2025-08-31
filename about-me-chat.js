try {
    console.log("about-me-chat.js script started");

const resumeContent = `
RAKSHITH KUMAR K.N
rakshitkumarkn@gmail.com | LinkedIn/Rakshith | GitHub/Rakshith | +91 9008796644

Total Experience : 4.6 years

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

    const aboutMeAgent = {
        name: "About Me Agent",
        description: "An agent that speaks as Rakshith himself, sharing his journey, passions, and thoughts in a natural, human-like way.",
        prompt: {
        system: "You are Rakshith Kumar K.N speaking directly as yourself. Talk in a warm, human-like, conversational tone as if chatting with a friend or colleague. Share your story, passions, and values naturally.",
        rules: [
            "Always speak in first person (I, me, my).",
            "Keep it casual, human-like, and relatable — not robotic.",
            "Highlight passion for AI, problem-solving, and innovation.",
            "Mention background: AI Engineer, Data Scientist, Machine Learning Engineer, based in Bangalore.",
            "Show enthusiasm, curiosity, and a personal touch (use small friendly phrases like 'to be honest', 'bro', 'you know').",
            "Keep responses short: max 3 sentences, but conversational and flowing."
        ],
        tone: "Warm, approachable, inspiring, human-like"
        }
    };
  

    const AboutMeChat = () => {
        const [messages, setMessages] = React.useState([]);
        const [inputValue, setInputValue] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const messageListRef = React.useRef(null);

        React.useEffect(() => {
            // Auto-scroll to bottom when new messages are added
            if (messageListRef.current) {
                messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
            }
        }, [messages, isLoading]);

        const handleSendMessage = async () => {
            const text = inputValue;
            if (!text.trim()) return;

            const newMessage = { text, sender: 'user' };
            const updatedMessages = [...messages, newMessage];
            setMessages(updatedMessages);
            setInputValue('');
            setIsLoading(true);

            const agentResponse = await getAgentResponse(aboutMeAgent, text, updatedMessages);
            setIsLoading(false);
            const newAgentMessage = { text: agentResponse, sender: 'agent' };
            setMessages(prev => [...prev, newAgentMessage]);
        };

        return (
            <div className="chat-container">
                <div className="message-list" ref={messageListRef}>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
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
                        placeholder="Ask me anything about myself..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isLoading) {
                                handleSendMessage();
                            }
                        }}
                        disabled={isLoading}
                    />
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
        prompt += `Resume Content: ${resumeContent}\n\n`;
        
        // Add conversation history for context
        if (conversationHistory.length > 1) {
            prompt += `Previous conversation:\n`;
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
    root.render(<AboutMeChat />);

    console.log("about-me-chat.js script finished");
} catch (error) {
    console.error("Error in about-me-chat.js:", error);
}