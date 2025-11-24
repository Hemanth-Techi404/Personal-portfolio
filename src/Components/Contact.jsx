import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const mailtoLink = `mailto:chellapillihemanth993@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161B22]/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[#8B949E] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#161B22]/80 border border-[#2D9CDB]/20 rounded-xl p-6 hover:border-[#2D9CDB]/40 hover:shadow-lg hover:shadow-[#2D9CDB]/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2D9CDB] to-[#00C6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#E6EDF3]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-1">Email</h3>
                  <a href="mailto:chellapillihemanth993@gmail.com" className="text-[#8B949E] hover:text-[#2D9CDB] transition-colors">
                    chellapillihemanth993@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#161B22]/80 border border-[#00C6FF]/20 rounded-xl p-6 hover:border-[#00C6FF]/40 hover:shadow-lg hover:shadow-[#00C6FF]/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00C6FF] to-[#A259FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#E6EDF3]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-1">Phone</h3>
                  <p className="text-[#8B949E]">Available on request</p>
                </div>
              </div>
            </div>

            <div className="bg-[#161B22]/80 border border-[#A259FF]/20 rounded-xl p-6 hover:border-[#A259FF]/40 hover:shadow-lg hover:shadow-[#A259FF]/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A259FF] to-[#2D9CDB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#E6EDF3]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EDF3] mb-1">Location</h3>
                  <p className="text-[#8B949E]">Available for remote work</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2D9CDB] to-[#00C6FF] rounded-xl p-6 text-[#E6EDF3] shadow-lg shadow-[#2D9CDB]/20">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="mb-6 text-[#E6EDF3]/90">
                Follow me on social media to stay updated with my latest projects and tech insights.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Hemanth-Techi404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanth-chellapilli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#161B22]/80 border border-[#2D9CDB]/20 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#161B22] text-[#E6EDF3] rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#161B22] text-[#E6EDF3] rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#161B22] text-[#E6EDF3] rounded-lg focus:ring-2 focus:ring-[#2D9CDB] focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E6EDF3] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#161B22] border border-[#161B22] text-[#E6EDF3] rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2D9CDB] to-[#00C6FF] text-[#E6EDF3] rounded-lg font-medium hover:shadow-lg hover:shadow-[#2D9CDB]/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Opening Email...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Email Client Opened!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-[#2D9CDB]/10 border border-[#2D9CDB]/20 rounded-lg text-[#2D9CDB] text-center">
                    Your email client has been opened. Please send the email to complete your message.
                  </div>
                )}

                <p className="text-[#8B949E] text-sm text-center">
                  Or email me directly at{' '}
                  <a href="mailto:chellapillihemanth993@gmail.com" className="text-[#2D9CDB] hover:text-purple-300 transition-colors">
                    chellapillihemanth993@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


