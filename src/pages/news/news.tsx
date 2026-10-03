import React from "react";
import "./styles.css";
import { FaBookOpen, FaBriefcase, FaFileAlt, FaRocket, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";

type Category = "publication" | "career" | "education" | "submission" | "launch";

const categoryMeta: Record<Category, { label: string; icon: React.ReactNode }> = {
  publication: { label: "Publication", icon: <FaBookOpen /> },
  career: { label: "Career", icon: <FaBriefcase /> },
  education: { label: "Education", icon: <FaGraduationCap /> },
  submission: { label: "Submission", icon: <FaFileAlt /> },
  launch: { label: "Launch", icon: <FaRocket /> },
};

interface NewsItemProps {
  date: string;
  category: Category;
  content: React.ReactNode;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, category, content }) => {
  const meta = categoryMeta[category];
  return (
    <li className={`news-item news-${category}`}>
      <span className="news-marker" aria-hidden="true">{meta.icon}</span>
      <div className="news-card">
        <div className="news-card-meta">
          <span className="news-badge">{meta.label}</span>
          <time className="news-card-date">{date}</time>
        </div>
        <p className="news-card-description">{content}</p>
      </div>
    </li>
  );
};

// Newest first.
const newsData: NewsItemProps[] = [
  {
    date: "October 2026",
    category: "publication",
    content: (
      <>
        Our work{" "}
        <a
          href="https://openreview.net/forum?id=9ok9NYTU27"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          <em>"ILM: An AI-Powered Storytelling Educational Tool"</em>
        </a>{" "}
        got accepted at the{" "}
        <a
          href="https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/MusIML#tab-accept-poster"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          <strong>7th Muslims in ML Workshop</strong>
        </a>
        , co-located with <strong>NeurIPS</strong> in Sydney, Australia! 🎉
      </>
    ),
  },
  {
    date: "September 2026",
    category: "publication",
    content: (
      <>
        Our work <em>"McMasterNLP at KnowledgeGraphEval-2026: Heterogeneous Expert Systems for Arabic Knowledge Graph Construction"</em>{" "}
        got accepted at the{" "}
        <a
          href="https://arabicnlp2026.sigarab.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          <strong>ArabicNLP Workshop</strong>
        </a>
        , co-located with <strong>EMNLP</strong> in Budapest, Hungary! 🎉
      </>
    ),
  },
  {
    date: "February 2026",
    category: "career",
    content: (
      <>
        Started working as <strong>Product Lead and Software Engineer</strong> at{" "}
        <a
          href="https://myseva.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Seva Intelligence, Inc.
        </a>{" "}
        🚀
      </>
    ),
  },
  {
    date: "November 2025",
    category: "education",
    content: (
      <>
        I will be joining <strong>McMaster University</strong> as an incoming{" "}
        <strong>MSc Computer Science</strong> graduate student in Fall 2026! 🎓
      </>
    ),
  },
  // {
  //   date: "May 2025",
  //   category: "launch",
  //   content: (
  //     <>
  //       Launched my personal dua jar website.{" "}
  //       <a href="https://dua-jar.vercel.app/" target="_blank" rel="noopener noreferrer" className="news-link">
  //         Do check it out! <FaExternalLinkAlt size={11} />
  //       </a>
  //     </>
  //   ),
  // },
  {
    date: "April 2025",
    category: "publication",
    content: (
      <>
        Published my second research paper on deep learning for rapid microplastic detection in{" "}
        <strong><em>RSC Advances</em></strong>. 🎉{" "}
        <a
          href="https://pubs.rsc.org/en/content/articlelanding/2025/ra/d4ra07991d"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Read the full paper <FaExternalLinkAlt size={11} />
        </a>
      </>
    ),
  },
  {
    date: "February 2025",
    category: "career",
    content: (
      <>
        Got promoted to <strong>Software Engineer L3</strong> @ Chaldal Ltd! 🎉
      </>
    ),
  },
  {
    date: "November 2024",
    category: "submission",
    content: "Submitted microplastic detection paper to RSC Advances journal.",
  },
];

const News: React.FC = () => (
  <div className="news-container">
    <h2 className="news-heading">News</h2>
    <p className="news-subheading">Recent updates, milestones and announcements.</p>
    <ol className="news-timeline">
      {newsData.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </ol>
  </div>
);

export default News;
