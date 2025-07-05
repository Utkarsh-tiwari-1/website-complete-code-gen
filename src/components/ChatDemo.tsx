
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Calendar, Clock, CheckCircle } from 'lucide-react';

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm your TailorTalk assistant. I can help you book appointments on your Google Calendar. What would you like to schedule today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const demoMessages = [
    "I need to schedule a meeting with my team",
    "How about tomorrow afternoon?",
    "2 PM works perfectly, thank you!"
  ];

  const botResponses = [
    "I'd be happy to help you schedule a team meeting! Let me check your calendar availability. What day works best for you?",
    "Let me check your calendar for tomorrow afternoon... I see you have availability at 2 PM, 3 PM, and 4 PM. Which time slot would you prefer?",
    "Perfect! I've scheduled your team meeting for tomorrow at 2 PM. The event has been added to your Google Calendar. You should receive a confirmation email shortly. Is there anything else I can help you with?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      type: 'user' as const,
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      const responseIndex = Math.min(messages.length, botResponses.length - 1);
      const botMessage = {
        type: 'bot' as const,
        content: botResponses[responseIndex],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const sendDemoMessage = (message: string) => {
    setInputValue(message);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience TailorTalk in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try our interactive demo to see how natural conversation meets intelligent scheduling
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">TailorTalk Assistant</h3>
                    <p className="text-blue-100 text-sm">Ready to help with scheduling</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      {message.type === 'bot' && index === messages.length - 1 && messages.length > 1 && (
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-200">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-xs text-gray-600">Calendar updated</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="flex gap-2 mb-3">
                  {demoMessages.map((demo, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => sendDemoMessage(demo)}
                      className="text-xs"
                    >
                      {demo}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="px-4">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
