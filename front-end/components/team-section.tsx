"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  avatar: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dhruv Parashar",
    role: "Lead Developer",
    bio: "Full-stack developer and designer with expertise in React, Next.js, Django, and AI integration. Passionate about crafting innovative and beautiful user experiences.",
    github: "https://github.com/DhruvParashar673",
    linkedin: "https://linkedin.com/in/dhruvp",
    avatar: "/dhruv.jpg",
    skills: ["React", "Next.js", "TypeScript", "Django", "AI Integration", "UI/UX Design", "Python"]
  },
];


export default function TeamSection() {
  const [cardExpanded, setCardExpanded] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-3 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              The Creator
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Meet The Developer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer building innovative AI-powered image captioning solutions.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => {
            const isExpanded = cardExpanded;
            const setExpanded = setCardExpanded;

            return (
              <motion.div 
                key={member.name}
                variants={item}
                className="transform w-full max-w-md"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className={`h-full relative bg-gradient-to-br ${
                  index === 0 ? "from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10" :
                  index === 1 ? "from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10" :
                  "from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/10"
                } dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full ${
                            index === 0 ? "bg-purple-200 dark:bg-purple-700/30" :
                            index === 1 ? "bg-blue-200 dark:bg-blue-700/30" :
                            "bg-cyan-200 dark:bg-cyan-700/30"
                          } blur-sm -m-1 opacity-60`}></div>
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-white dark:border-gray-800 relative z-10"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold dark:text-white">
                            {member.name}
                          </h3>
                          <div className={`text-sm font-medium ${
                            index === 0 ? "text-purple-600 dark:text-purple-400" :
                            index === 1 ? "text-blue-600 dark:text-blue-400" :
                            "text-cyan-600 dark:text-cyan-400"
                          }`}>
                            {member.role}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setExpanded(!isExpanded)}
                        className={`rounded-full transition-transform ${isExpanded ? "rotate-90" : ""}`}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex-1">
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            key={`content-${index}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-muted-foreground mb-4 text-sm">
                              {member.bio}
                            </p>
                            
                            <div className="mb-4 flex flex-wrap gap-2">
                              {member.skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="bg-white/50 dark:bg-gray-800/50">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="flex justify-center gap-3 mt-4">
                      <Link
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          index === 0 ? "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/50" :
                          index === 1 ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50" :
                          "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-800/50"
                        } transition-colors`}
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            index === 0 ? "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/50" :
                            index === 1 ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50" :
                            "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-800/50"
                          } transition-colors`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      )}
                      {member.twitter && (
                        <Link
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            index === 0 ? "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/50" :
                            index === 1 ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50" :
                            "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-800/50"
                          } transition-colors`}
                        >
                          <Twitter className="w-4 h-4" />
                        </Link>
                      )}
                      {member.website && (
                        <Link
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            index === 0 ? "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-800/50" :
                            index === 1 ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/50" :
                            "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-800/50"
                          } transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
