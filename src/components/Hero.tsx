
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Booking Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Mission 🎯
            <br />
            <span className="text-blue-600">Seamless Calendar Booking</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build a conversational AI agent that can assist users in booking appointments on your 
            Google Calendar. The agent should be capable of engaging in a natural, back-and-forth 
            conversation with the user, understanding their intent, checking calendar availability, 
            suggesting suitable time slots, and confirming bookings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Try Demo Chat
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              View Integration
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <MessageCircle className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Natural Conversation</h3>
              <p className="text-gray-600 text-sm">Engaging back-and-forth dialogue understanding user intent</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <Calendar className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600 text-sm">Check availability and suggest optimal time slots</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
              <Sparkles className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Seamless Booking</h3>
              <p className="text-gray-600 text-sm">Confirm appointments directly to Google Calendar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
