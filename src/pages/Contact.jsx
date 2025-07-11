// import React, { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = 'Phone number must be 10 digits';
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();

//     if (Object.keys(newErrors).length === 0) {
//       // Form is valid, submit the data
//       console.log('Form submitted:', formData);
//       alert('Thank you for your message! We will get back to you soon.');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } else {
//       setErrors(newErrors);
//     }
//     const message = {
//       Name: ` ${formData.name}\n +`,
//       Email: `${formData.email} \n +`,
//       Subject: `${formData.subject} \n +`,
//       Message: `${formData.message}`
//     }

//     const phoneNumber = '917218143845';
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = ` https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   const contactInfo = [
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: 'Address',
//       details: ['123 Education Street', 'Knowledge City, Mumbai - 400001', 'Maharashtra, India']
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       title: 'Phone',
//       details: ['+91 98765 43210', '+91 98765 43211']
//     },
//     {
//       icon: <Mail className="h-6 w-6" />,
//       title: 'Email',
//       details: ['info@excellenceacademy.com', 'admissions@excellenceacademy.com']
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       title: 'Office Hours',
//       details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed']
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
//             <p className="text-xl md:text-2xl max-w-3xl mx-auto">
//               Get in touch with us for any inquiries or to learn more about our programs
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form and Info */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     placeholder="Enter your full name"
//                   />
//                   {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     placeholder="Enter your email address"
//                   />
//                   {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                 </div>

//                 {/* <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     placeholder="Enter your phone number"
//                   />
//                   {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                 </div> */}

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     placeholder="Enter the subject"
//                   />
//                   {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     placeholder="Enter your message"
//                   ></textarea>
//                   {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
//                 >
//                   <Send className="h-5 w-5 mr-2" />
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//                 <p className="text-gray-600 text-lg mb-8">
//                   We'd love to hear from you! Whether you have questions about our courses,
//                   need guidance on admissions, or want to discuss your educational goals,
//                   our team is here to help.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4 ">
//                     <div className="text-blue-600 mt-1 hover:translate-x-1 transition-all duration-200 ">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-2 hover:translate-x-1 transition-all duration-200">{info.title}</h3>
//                       <div className="space-y-1 ">
//                         {info.details.map((detail, detailIndex) => (
//                           <p key={detailIndex} className="text-gray-600">
//                             {detail}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Find Us
//             </h2>
//             <p className="text-xl text-gray-600">
//               Visit our campus and experience our learning environment
//             </p>
//           </div>

//           {/* Dummy Map */}
//           <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
//             <div className="text-center">
//               <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
//               <p className="text-gray-500">123 Education Street, Knowledge City, Mumbai - 400001</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
























// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import classNames from 'classnames';
// import { Send, MapPin } from 'lucide-react';

// const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: '',
//     },
//     validationSchema: yup.object({
//       name: yup.string().required('Enter Name'),
//       email: yup.string().email('Invalid email').required('Enter Email'),
//       phone: yup
//         .string()
//         .matches(/^\d{10}$/, 'Phone number must be 10 digits')
//         .required('Enter Phone Number'),
//       subject: yup.string().required('Enter Subject'),
//       message: yup.string().required('Enter Message'),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       const message = `*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Subject:* ${values.subject}\n*Message:* ${values.message}`;
//       const phoneNumber = '917218143845';
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//       window.open(whatsappUrl, '_blank');
//       resetForm();
//     },
//   });

//   return (
//     <div className="min-h-screen pt-16 bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>

//         <form onSubmit={formik.handleSubmit} className="space-y-6">
//           {['name', 'email', 'phone', 'subject', 'message'].map((field, idx) => (
//             <div key={idx}>
//               <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2 capitalize">
//                 {field} *
//               </label>
//               {field === 'message' ? (
//                 <textarea
//                   id={field}
//                   name={field}
//                   rows={5}
//                   value={formik.values[field]}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={classNames(
//                     'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
//                     {
//                       'border-red-500': formik.touched[field] && formik.errors[field],
//                       'border-gray-300': !(formik.touched[field] && formik.errors[field]),
//                     }
//                   )}
//                   placeholder={`Enter your ${field}`}
//                 />
//               ) : (
//                 <input
//                   type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//                   id={field}
//                   name={field}
//                   value={formik.values[field]}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={classNames(
//                     'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
//                     {
//                       'border-red-500': formik.touched[field] && formik.errors[field],
//                       'border-gray-300': !(formik.touched[field] && formik.errors[field]),
//                     }
//                   )}
//                   placeholder={`Enter your ${field}`}
//                 />
//               )}
//               {formik.touched[field] && formik.errors[field] && (
//                 <div className="mt-1 text-sm text-red-600">{formik.errors[field]}</div>
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
//           >
//             <Send className="h-5 w-5 mr-2" />
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Map Placeholder */}
//       <div className="max-w-4xl mx-auto mt-12">
//         <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
//           <div className="text-center">
//             <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//             <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
//             <p className="text-gray-500">123 Education Street, Knowledge City, Mumbai - 400001</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      phone: yup.string().matches(/^\d{10}$/, 'Phone must be 10 digits').required('Phone number is required'),
      subject: yup.string().required('Subject is required'),
      message: yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const message = `*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Subject:* ${values.subject}\n*Message:* ${values.message}`;
      const phoneNumber = '917218143845';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      resetForm();
    },
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['123 Education Street', 'Knowledge City, Mumbai - 400001', 'Maharashtra, India'],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@excellenceacademy.com', 'admissions@excellenceacademy.com'],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with us for any inquiries or to learn more about our programs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {['name', 'email', 'phone', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {field} *
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${formik.touched[field] && formik.errors[field]
                        ? 'border-red-500'
                        : 'border-gray-300'
                      }`}
                    placeholder={`Enter your ${field}`}
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <p className="text-sm text-red-600 mt-1">{formik.errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${formik.touched.message && formik.errors.message
                      ? 'border-red-500'
                      : 'border-gray-300'
                    }`}
                  placeholder="Enter your message"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-sm text-red-600 mt-1">{formik.errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 text-lg mb-8">
              We'd love to hear from you! Whether you have questions about our courses, need guidance on admissions, or want to discuss your educational goals, our team is here to help.
            </p>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-blue-600 mt-1">{info.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 mb-10">
            Visit our campus and experience our learning environment
          </p>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div>
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">123 Education Street, Knowledge City, Mumbai - 400001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
