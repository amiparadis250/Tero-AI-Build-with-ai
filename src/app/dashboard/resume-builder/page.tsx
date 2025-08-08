"use client";
import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Wrench, Save, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
}

interface ExperienceEntry {
  company: string;
  title: string;
  duration: string;
  description: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  skills: string[];
}

export default function ResumeBuilderWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      summary: ''
    },
    education: [{ institution: '', degree: '', year: '' }],
    experience: [{ company: '', title: '', duration: '', description: '' }],
    skills: ['']
  });

  const steps = [
    {
      title: 'Personal Info',
      icon: <User className="w-4 h-4" />,
      content: 'personal'
    },
    {
      title: 'Education',
      icon: <GraduationCap className="w-4 h-4" />,
      content: 'education'
    },
    {
      title: 'Experience',
      icon: <Briefcase className="w-4 h-4" />,
      content: 'experience'
    },
    {
      title: 'Skills',
      icon: <Wrench className="w-4 h-4" />,
      content: 'skills'
    }
  ];

  const updateFormData = <K extends keyof FormData>(section: K, data: FormData[K]) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFinish = () => {
    console.log('Complete resume data:', formData);
    alert('Resume saved successfully!');
  };

  const addEducation = () => {
    updateFormData('education', [...formData.education, { institution: '', degree: '', year: '' }]);
  };

  const removeEducation = (index: number) => {
    if (formData.education.length > 1) {
      const updated = formData.education.filter((_, i) => i !== index);
      updateFormData('education', updated);
    }
  };

  const updateEducation = (index: number, field: keyof EducationEntry, value: string) => {
    const updated = formData.education.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    updateFormData('education', updated);
  };

  const addExperience = () => {
    updateFormData('experience', [...formData.experience, { company: '', title: '', duration: '', description: '' }]);
  };

  const removeExperience = (index: number) => {
    if (formData.experience.length > 1) {
      const updated = formData.experience.filter((_, i) => i !== index);
      updateFormData('experience', updated);
    }
  };

  const updateExperience = (index: number, field: keyof ExperienceEntry, value: string) => {
    const updated = formData.experience.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    updateFormData('experience', updated);
  };

  const addSkill = () => {
    updateFormData('skills', [...formData.skills, '']);
  };

  const removeSkill = (index: number): void => {
    if (formData.skills.length > 1) {
      const updated: string[] = formData.skills.filter((_, i) => i !== index);
      updateFormData('skills', updated);
    }
  };

  const updateSkill = (index: number, value: string): void => {
    const updated: string[] = formData.skills.map((item: string, i: number) => i === index ? value : item);
    updateFormData('skills', updated);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                <input
                  type="url"
                  value={formData.personalInfo.linkedin}
                  onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile</label>
              <input
                type="url"
                value={formData.personalInfo.github}
                onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, github: e.target.value })}
                placeholder="https://github.com/yourusername"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
              <textarea
                rows={3}
                value={formData.personalInfo.summary}
                onChange={(e) => updateFormData('personalInfo', { ...formData.personalInfo, summary: e.target.value })}
                placeholder="Brief summary of your professional background and goals"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium">Education #{index + 1}</h4>
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => removeEducation(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    placeholder="Institution"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="Degree/Major"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={edu.year}
                    onChange={(e) => updateEducation(index, 'year', e.target.value)}
                    placeholder="Year (e.g., 2020)"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEducation}
              className="w-full p-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2 text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Education
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Work Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-medium">Experience #{index + 1}</h4>
                  {formData.experience.length > 1 && (
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Company"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                    placeholder="Job Title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                    placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    rows={3}
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    placeholder="Responsibilities and achievements"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addExperience}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Experience
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Skills</h3>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  placeholder="e.g., JavaScript, React, Node.js"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formData.skills.length > 1 && (
                  <button
                    onClick={() => removeSkill(index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addSkill}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Skill
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Resume Builder</h1>
          <p className="text-gray-600 mb-4 text-sm">Create your professional resume step by step</p>

          {/* Progress Steps */}
          <div className="relative mb-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center z-10 bg-white">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mb-1 ${
                      index <= currentStep
                        ? 'bg-blue-500 border-blue-500 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className={`text-xs text-center ${index <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-200 -z-0">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="min-h-[350px] mb-3">
          {renderStepContent()}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-200 bg-white">
          <button
            onClick={prev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="text-xs text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>

          {currentStep === steps.length - 1 ? (
            <button
              onClick={onFinish}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
            >
              <Save className="w-4 h-4" />
              Save Resume
            </button>
          ) : (
            <button
              onClick={next}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
