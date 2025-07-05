
import { Code, Database, MessageSquare, Calendar } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      tech: "Python with FastAPI",
      description: "High-performance async framework"
    },
    {
      category: "Agent Framework",
      icon: <MessageSquare className="w-6 h-6" />,
      tech: "LangGraph or LangChain",
      description: "Advanced conversation flow management"
    },
    {
      category: "Real-time Communication",
      icon: <Code className="w-6 h-6" />,
      tech: "Streamlit",
      description: "Interactive web interface"
    },
    {
      category: "AI Model",
      icon: <MessageSquare className="w-6 h-6" />,
      tech: "Gemini, Grok, etc.",
      description: "Natural language understanding"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Stack Requirements ⚡
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technologies for optimal performance and reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tech.category}</h3>
                </div>
              </div>
              <h4 className="font-bold text-blue-600 mb-2">{tech.tech}</h4>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Google Calendar Integration Instructions
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                1
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Service Account Setup:</strong> Use a Service Account for integrating with Google Calendar (no need to implement OAuth).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                2
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Calendar Connection:</strong> Please connect your google calendar or create and connect a test calendar; booking will be done on the connected calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
