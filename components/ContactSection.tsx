import { motion } from 'framer-motion'
import { Github, Instagram, Mail, MapPin, Phone, Send, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from './ui/use-toast'

export default function ContactSection () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 4000)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon."
    })

    setFormData({ name: '', email: '', message: '' })
    // setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'mubaidjavaid97@gmail.com'
    },
    { icon: <Phone size={24} />, label: 'Phone', value: '+92 325 6482932' },
    {
      icon: <X size={24} />,
      label: 'Skype',
      value: 'https://x.com/mubaidjavaid'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'https://github.com/MUbaidJavaid'
    },

    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      value: 'https://www.instagram.com/mubaidjavaid'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Multan, Pakistan'
    }
  ]

  return (
    <div className='container mx-auto px-4 py-20'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>
          Get In Touch
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </motion.div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          {/* <div>
            <h3 className='text-2xl font-bold mb-4'>Let's Connect</h3>
            <p className='text-muted-foreground mb-8'>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div> */}

          <div className='space-y-6'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='flex items-start gap-4 glass p-4 rounded-xl'
              >
                <div className='text-primary mt-1'>{info.icon}</div>
                <div>
                  <div className='font-semibold mb-1'>{info.label}</div>
                  <div className='text-muted-foreground'>{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form
            onSubmit={handleSubmit}
            className='glass rounded-2xl p-8 space-y-6'
          >
            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Your Name
              </label>
              <Input
                id='name'
                type='text'
                placeholder='John Doe'
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className='w-full'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Your Email
              </label>
              <Input
                id='email'
                type='email'
                placeholder='john@example.com'
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className='w-full'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium mb-2'
              >
                Message
              </label>
              <Textarea
                id='message'
                placeholder='Tell me about your project...'
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className='w-full min-h-[150px]'
              />
            </div>

            <Button type='submit' disabled={isLoading} className='w-full group'>
              {isLoading ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send
                    className='ml-2 group-hover:translate-x-1 transition-transform'
                    size={20}
                  />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
