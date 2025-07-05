
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Code } from 'lucide-react';

const Submission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Final Submission
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Complete implementation requirements and deployment guidelines
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-7 h-7 text-blue-400" />
              Deployment Requirements
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  1
                </div>
                <div>
                  <p className="text-blue-100">
                    <strong className="text-white">Host both backend and frontend</strong> using a platform like Railway, Render, Fly.io, etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  2
                </div>
                <div>
                  <p className="text-blue-100">
                    <strong className="text-white">Provide working Streamlit URL</strong> where I can test the booking functionality live.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                  3
                </div>
                <div>
                  <p className="text-blue-100">
                    <strong className="text-white">Include GitHub link</strong> - Your final submission must include the Github link.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-7 h-7 text-green-400" />
              Quality Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-400">Functionality</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Fully functional conversational AI</li>
                  <li>• Real Google Calendar integration</li>
                  <li>• Natural conversation flow</li>
                  <li>• Error handling & validation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-400">User Experience</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Intuitive chat interface</li>
                  <li>• Clear booking confirmations</li>
                  <li>• Responsive design</li>
                  <li>• Professional appearance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 inline-block">
              <p className="text-gray-900 font-bold text-lg mb-2">
                💡 Pro Tip: Function Calling Integration
              </p>
              <p className="text-gray-800">
                Use function calling / tool calling feature to manage booking via agent for enhanced functionality
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submission;
