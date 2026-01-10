import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { sendComplaintEmail, sendComplaintSMS } from '../services/complaintService';

interface ComplaintFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  description: string;
}

const complaintCategories = [
  'Account Issue',
  'Transaction Problem',
  'Technical Support',
  'Feature Request',
  'Billing Inquiry',
  'Security Concern',
  'Other',
];

export function Complaint() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<ComplaintFormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: '',
  });

  const handleChange = (field: keyof ComplaintFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setStatus('idle');
  };

  const generateComplaintId = () => {
    return 'COMP-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const complaintId = generateComplaintId();
      
      // Prepare complaint details
      const complaintDetails = {
        complaintId,
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Send email
      await sendComplaintEmail(complaintDetails);
      
      // Send SMS
      await sendComplaintSMS(complaintDetails);

      setStatus('success');
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          subject: '',
          description: '',
        });
        setOpen(false);
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.category !== '' &&
      formData.subject.trim() !== '' &&
      formData.description.trim() !== ''
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-700 hover:border-transparent cursor-pointer"
      >
        <MessageSquare className="w-4 h-4" />
        Register Complaint
      </button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Register a Complaint</DialogTitle>
            <DialogDescription>
              Please fill out the form below. We'll send a confirmation to your email and phone number.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Complaint Category *</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {complaintCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Brief description of your complaint"
              value={formData.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description *</Label>
            <Textarea
              id="description"
              placeholder="Please provide detailed information about your complaint..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={5}
              required
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <div>
                <p className="text-emerald-900 font-medium">Complaint registered successfully!</p>
                <p className="text-emerald-700 text-sm">
                  Confirmation has been sent to your email and phone number.
                </p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-red-900 font-medium">Error submitting complaint</p>
                <p className="text-red-700 text-sm">
                  Please check your email and phone number, then try again.
                </p>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid() || loading}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Complaint
                </>
              )}
            </Button>
          </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
