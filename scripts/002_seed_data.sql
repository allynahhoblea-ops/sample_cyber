-- Seed data for CyberPath

-- Career Paths
INSERT INTO public.career_paths (id, title, description, icon, color, estimated_months, difficulty, salary_range, demand_level, skills) VALUES
('cybersecurity-analyst', 'Cybersecurity Analyst', 'Monitor and protect organizational systems from cyber threats. Analyze security incidents, implement security measures, and ensure compliance with security policies.', 'Shield', 'cyan', 6, 'beginner', '$70,000 - $110,000', 'high', ARRAY['SIEM', 'Incident Response', 'Threat Analysis', 'Network Security', 'Compliance']),
('penetration-tester', 'Penetration Tester', 'Ethically hack systems to find vulnerabilities before malicious actors do. Conduct security assessments and provide recommendations for improving security posture.', 'Target', 'red', 9, 'intermediate', '$90,000 - $140,000', 'high', ARRAY['Web App Testing', 'Network Pentesting', 'Social Engineering', 'Exploit Development', 'Report Writing']),
('soc-analyst', 'SOC Analyst', 'Work in a Security Operations Center monitoring security events, responding to incidents, and maintaining security infrastructure.', 'Eye', 'blue', 4, 'beginner', '$60,000 - $95,000', 'high', ARRAY['Log Analysis', 'SIEM Tools', 'Incident Handling', 'Threat Intelligence', 'Ticketing Systems']),
('security-engineer', 'Security Engineer', 'Design and implement security solutions, automate security processes, and build secure infrastructure.', 'Wrench', 'purple', 12, 'advanced', '$110,000 - $170,000', 'high', ARRAY['Cloud Security', 'DevSecOps', 'Security Architecture', 'Automation', 'Infrastructure as Code']),
('incident-responder', 'Incident Responder', 'Lead the response to security incidents, perform forensic analysis, and help organizations recover from cyber attacks.', 'AlertTriangle', 'orange', 8, 'intermediate', '$85,000 - $130,000', 'high', ARRAY['Digital Forensics', 'Malware Analysis', 'Incident Management', 'Evidence Collection', 'Crisis Management'])
ON CONFLICT (id) DO NOTHING;

-- Courses for Cybersecurity Analyst Path
INSERT INTO public.courses (id, path_id, title, description, thumbnail_url, difficulty, duration_hours, order_index, is_free, instructor_name, rating, students_count) VALUES
('intro-cybersecurity', 'cybersecurity-analyst', 'Introduction to Cybersecurity', 'Learn the fundamentals of cybersecurity including key concepts, terminology, and the current threat landscape.', NULL, 'beginner', 4.5, 1, true, 'Dr. Sarah Chen', 4.8, 15420),
('network-security-fundamentals', 'cybersecurity-analyst', 'Network Security Fundamentals', 'Understand how networks work and learn to identify and protect against network-based attacks.', NULL, 'beginner', 8.0, 2, false, 'Marcus Williams', 4.7, 12350),
('security-monitoring-siem', 'cybersecurity-analyst', 'Security Monitoring with SIEM', 'Master SIEM tools and techniques for monitoring security events and detecting threats.', NULL, 'intermediate', 12.0, 3, false, 'Dr. Sarah Chen', 4.9, 8920),
('incident-response-basics', 'cybersecurity-analyst', 'Incident Response Basics', 'Learn the incident response lifecycle and how to handle security incidents effectively.', NULL, 'intermediate', 10.0, 4, false, 'James Rodriguez', 4.6, 7840),
('compliance-frameworks', 'cybersecurity-analyst', 'Security Compliance & Frameworks', 'Understand major security frameworks like NIST, ISO 27001, and compliance requirements.', NULL, 'intermediate', 6.0, 5, false, 'Emily Park', 4.5, 6230)
ON CONFLICT (id) DO NOTHING;

-- Courses for Penetration Tester Path
INSERT INTO public.courses (id, path_id, title, description, thumbnail_url, difficulty, duration_hours, order_index, is_free, instructor_name, rating, students_count) VALUES
('ethical-hacking-intro', 'penetration-tester', 'Ethical Hacking Introduction', 'Start your journey into ethical hacking with fundamental concepts and legal considerations.', NULL, 'beginner', 5.0, 1, true, 'Alex Turner', 4.9, 18500),
('web-app-security', 'penetration-tester', 'Web Application Security Testing', 'Learn to identify and exploit common web vulnerabilities like SQL injection and XSS.', NULL, 'intermediate', 15.0, 2, false, 'Alex Turner', 4.8, 14200),
('network-penetration', 'penetration-tester', 'Network Penetration Testing', 'Master network scanning, enumeration, and exploitation techniques.', NULL, 'intermediate', 18.0, 3, false, 'Chris Morgan', 4.7, 11800),
('advanced-exploitation', 'penetration-tester', 'Advanced Exploitation Techniques', 'Deep dive into buffer overflows, privilege escalation, and post-exploitation.', NULL, 'advanced', 20.0, 4, false, 'Chris Morgan', 4.9, 8400),
('pentest-reporting', 'penetration-tester', 'Professional Pentest Reporting', 'Learn to write clear, actionable penetration testing reports for clients.', NULL, 'intermediate', 4.0, 5, false, 'Emily Park', 4.6, 6900)
ON CONFLICT (id) DO NOTHING;

-- Courses for SOC Analyst Path
INSERT INTO public.courses (id, path_id, title, description, thumbnail_url, difficulty, duration_hours, order_index, is_free, instructor_name, rating, students_count) VALUES
('soc-fundamentals', 'soc-analyst', 'SOC Fundamentals', 'Understand the structure and operations of a Security Operations Center.', NULL, 'beginner', 3.5, 1, true, 'Maria Santos', 4.7, 12800),
('log-analysis', 'soc-analyst', 'Log Analysis & Investigation', 'Master the art of analyzing logs from various sources to detect security incidents.', NULL, 'beginner', 8.0, 2, false, 'Maria Santos', 4.8, 10500),
('threat-intelligence', 'soc-analyst', 'Threat Intelligence Fundamentals', 'Learn to gather, analyze, and apply threat intelligence in your security operations.', NULL, 'intermediate', 7.0, 3, false, 'David Kim', 4.6, 8200),
('soc-tools-mastery', 'soc-analyst', 'SOC Tools Mastery', 'Hands-on training with essential SOC tools including Splunk, ELK, and QRadar.', NULL, 'intermediate', 14.0, 4, false, 'Maria Santos', 4.9, 9100)
ON CONFLICT (id) DO NOTHING;

-- Modules for Introduction to Cybersecurity
INSERT INTO public.modules (id, course_id, title, description, order_index) VALUES
('intro-cyber-mod1', 'intro-cybersecurity', 'What is Cybersecurity?', 'Understanding the basics of cybersecurity and why it matters', 1),
('intro-cyber-mod2', 'intro-cybersecurity', 'The Threat Landscape', 'Explore different types of cyber threats and threat actors', 2),
('intro-cyber-mod3', 'intro-cybersecurity', 'Security Principles', 'Learn the CIA triad and other fundamental security concepts', 3),
('intro-cyber-mod4', 'intro-cybersecurity', 'Career Paths in Cybersecurity', 'Discover various career opportunities in the field', 4)
ON CONFLICT (id) DO NOTHING;

-- Modules for Ethical Hacking Introduction
INSERT INTO public.modules (id, course_id, title, description, order_index) VALUES
('ethical-hack-mod1', 'ethical-hacking-intro', 'Introduction to Ethical Hacking', 'What is ethical hacking and why is it important?', 1),
('ethical-hack-mod2', 'ethical-hacking-intro', 'Legal and Ethical Considerations', 'Understanding laws and ethics in penetration testing', 2),
('ethical-hack-mod3', 'ethical-hacking-intro', 'Reconnaissance Techniques', 'Learn passive and active information gathering', 3),
('ethical-hack-mod4', 'ethical-hacking-intro', 'Setting Up Your Lab', 'Build a safe environment for practicing hacking', 4)
ON CONFLICT (id) DO NOTHING;

-- Modules for SOC Fundamentals
INSERT INTO public.modules (id, course_id, title, description, order_index) VALUES
('soc-fund-mod1', 'soc-fundamentals', 'Introduction to SOC', 'Understanding Security Operations Centers', 1),
('soc-fund-mod2', 'soc-fundamentals', 'SOC Roles and Responsibilities', 'Learn about different roles within a SOC', 2),
('soc-fund-mod3', 'soc-fundamentals', 'Incident Triage Process', 'How to prioritize and handle security alerts', 3)
ON CONFLICT (id) DO NOTHING;

-- Lessons for Introduction to Cybersecurity - Module 1
INSERT INTO public.lessons (id, module_id, title, content, duration_minutes, order_index, lesson_type) VALUES
('intro-cyber-l1', 'intro-cyber-mod1', 'Welcome to Cybersecurity', 'In this lesson, we will introduce you to the exciting world of cybersecurity. You will learn what cybersecurity is, why it is crucial in today''s digital age, and how it impacts businesses and individuals alike.', 15, 1, 'video'),
('intro-cyber-l2', 'intro-cyber-mod1', 'History of Cyber Attacks', 'Explore the evolution of cyber attacks from the early days of computing to modern sophisticated threats. Understanding history helps us prepare for the future.', 20, 2, 'video'),
('intro-cyber-l3', 'intro-cyber-mod1', 'Key Terminology', 'Learn essential cybersecurity terminology that you will encounter throughout your career. This includes terms like malware, phishing, encryption, and more.', 25, 3, 'reading'),
('intro-cyber-l4', 'intro-cyber-mod1', 'Module 1 Quiz', 'Test your knowledge of cybersecurity basics with this comprehensive quiz.', 15, 4, 'quiz')
ON CONFLICT (id) DO NOTHING;

-- Lessons for Introduction to Cybersecurity - Module 2
INSERT INTO public.lessons (id, module_id, title, content, duration_minutes, order_index, lesson_type) VALUES
('intro-cyber-l5', 'intro-cyber-mod2', 'Types of Threat Actors', 'Learn about different types of attackers including hacktivists, nation-states, cybercriminals, and insider threats.', 20, 1, 'video'),
('intro-cyber-l6', 'intro-cyber-mod2', 'Common Attack Vectors', 'Understand how attackers gain access to systems through various attack vectors like email, web, and network attacks.', 25, 2, 'video'),
('intro-cyber-l7', 'intro-cyber-mod2', 'Malware Types Deep Dive', 'Explore different types of malware including viruses, worms, trojans, ransomware, and spyware.', 30, 3, 'reading'),
('intro-cyber-l8', 'intro-cyber-mod2', 'Phishing Simulation', 'Practice identifying phishing attempts in a safe, simulated environment.', 20, 4, 'simulation')
ON CONFLICT (id) DO NOTHING;

-- Lessons for Ethical Hacking - Module 1
INSERT INTO public.lessons (id, module_id, title, content, duration_minutes, order_index, lesson_type) VALUES
('ethical-hack-l1', 'ethical-hack-mod1', 'What is Ethical Hacking?', 'Understand the role of ethical hackers in improving security and the difference between black hat and white hat hackers.', 15, 1, 'video'),
('ethical-hack-l2', 'ethical-hack-mod1', 'The Penetration Testing Process', 'Learn the five phases of penetration testing: planning, reconnaissance, scanning, exploitation, and reporting.', 25, 2, 'video'),
('ethical-hack-l3', 'ethical-hack-mod1', 'Types of Penetration Tests', 'Explore different types of pentests including black box, white box, and gray box testing.', 20, 3, 'reading')
ON CONFLICT (id) DO NOTHING;

-- Achievements
INSERT INTO public.achievements (id, title, description, icon, category, points) VALUES
('first-lesson', 'First Steps', 'Complete your first lesson', 'Star', 'milestone', 10),
('first-course', 'Course Completer', 'Complete your first course', 'Trophy', 'course', 100),
('week-streak', 'Week Warrior', 'Maintain a 7-day learning streak', 'Flame', 'streak', 50),
('month-streak', 'Dedicated Learner', 'Maintain a 30-day learning streak', 'Flame', 'streak', 200),
('quiz-master', 'Quiz Master', 'Score 100% on any quiz', 'Award', 'skill', 25),
('simulation-ace', 'Simulation Ace', 'Pass all simulations in a course', 'Zap', 'skill', 75),
('path-starter', 'Path Pioneer', 'Start your first career path', 'Map', 'milestone', 15),
('path-complete', 'Path Master', 'Complete an entire career path', 'Crown', 'milestone', 500),
('early-bird', 'Early Bird', 'Complete a lesson before 8 AM', 'Sun', 'milestone', 20),
('night-owl', 'Night Owl', 'Complete a lesson after 10 PM', 'Moon', 'milestone', 20)
ON CONFLICT (id) DO NOTHING;

-- Simulations
INSERT INTO public.simulations (id, title, description, scenario_type, difficulty, scenario_data, points, time_limit_minutes) VALUES
('phishing-detection-1', 'Phishing Email Detection', 'Analyze a series of emails and identify which ones are phishing attempts.', 'phishing', 'beginner', '{
  "emails": [
    {
      "id": "email1",
      "from": "security@amaz0n-support.com",
      "subject": "Urgent: Your account has been compromised",
      "body": "Dear Customer, We have detected unusual activity on your account. Click here immediately to verify your identity or your account will be suspended.",
      "isPhishing": true,
      "indicators": ["Misspelled domain", "Urgency tactics", "Generic greeting", "Suspicious link"]
    },
    {
      "id": "email2",
      "from": "no-reply@github.com",
      "subject": "You have a new follower",
      "body": "Hi username, johndoe is now following you on GitHub. View their profile at https://github.com/johndoe",
      "isPhishing": false,
      "indicators": []
    },
    {
      "id": "email3",
      "from": "IT-Dept@company.internal",
      "subject": "Password Reset Required",
      "body": "Your password will expire in 24 hours. Please click this link to reset: http://192.168.1.100/reset",
      "isPhishing": true,
      "indicators": ["Suspicious internal IP", "Urgency without context", "No digital signature"]
    }
  ]
}', 100, 10),
('network-analysis-1', 'Suspicious Network Traffic', 'Analyze network logs to identify potential security incidents.', 'network', 'intermediate', '{
  "logs": [
    {"timestamp": "2024-01-15T10:23:45Z", "source_ip": "192.168.1.50", "dest_ip": "185.234.72.101", "port": 443, "bytes": 1024, "suspicious": false},
    {"timestamp": "2024-01-15T10:24:12Z", "source_ip": "192.168.1.50", "dest_ip": "185.234.72.101", "port": 4444, "bytes": 52428800, "suspicious": true, "reason": "Unusual port with large data transfer"},
    {"timestamp": "2024-01-15T10:25:00Z", "source_ip": "192.168.1.50", "dest_ip": "10.0.0.5", "port": 445, "bytes": 2048, "suspicious": true, "reason": "Internal SMB scanning"}
  ],
  "questions": [
    {"q": "Which IP address shows signs of data exfiltration?", "answer": "192.168.1.50"},
    {"q": "What port is being used for the suspicious large transfer?", "answer": "4444"}
  ]
}', 150, 15)
ON CONFLICT (id) DO NOTHING;

-- Quiz Questions for intro-cyber-l4
INSERT INTO public.quiz_questions (id, lesson_id, question, options, correct_answer, explanation, order_index) VALUES
('quiz-intro-1', 'intro-cyber-l4', 'What does CIA stand for in cybersecurity?', '["Central Intelligence Agency", "Confidentiality, Integrity, Availability", "Cyber Intelligence Analysis", "Critical Infrastructure Assessment"]', 1, 'The CIA triad represents the three core principles of information security: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy and trustworthiness), and Availability (ensuring authorized users can access data when needed).', 1),
('quiz-intro-2', 'intro-cyber-l4', 'Which type of malware encrypts files and demands payment?', '["Virus", "Worm", "Ransomware", "Spyware"]', 2, 'Ransomware is a type of malware that encrypts victim files and demands a ransom payment to restore access. Famous examples include WannaCry and Ryuk.', 2),
('quiz-intro-3', 'intro-cyber-l4', 'What is phishing?', '["A network scanning technique", "A social engineering attack using deceptive emails", "A type of firewall", "A password cracking method"]', 1, 'Phishing is a social engineering attack where attackers send fraudulent emails or messages that appear to be from trusted sources to trick victims into revealing sensitive information.', 3),
('quiz-intro-4', 'intro-cyber-l4', 'Which of the following is NOT a common threat actor?', '["Nation-state hackers", "Hacktivists", "Script kiddies", "Network administrators"]', 3, 'Network administrators are IT professionals responsible for managing and securing networks, not threat actors. The other options (nation-state hackers, hacktivists, and script kiddies) are all types of threat actors with different motivations.', 4)
ON CONFLICT (id) DO NOTHING;
