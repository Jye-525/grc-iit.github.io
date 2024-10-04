export type Affiliation = {
  image: string;
  name: string;
  type: "laboratory" | "university" | "company" | "funding";
  url: string;
};

export type Job = {
  applicationLink: string;
  detailLink?: string;
  detailText?: string;
  location?: string;
  postedAt?: string;
  shortDescription: string;
  status: "open" | "closed";
  title: string;
  // type: "full-time" | "part-time" | "internship";
};

export type MemberLinkType =
  | "website"
  | "email"
  | "github"
  | "linkedin"
  | "twitter"
  | "scholar";

export type Member = {
  affiliation?: string;
  advisor?: string;
  bio?: string;
  image: string;
  links?: Record<MemberLinkType, string>;
  name: string;
  researchInterests?: string[];
  title: string;
  type: "researcher" | "engineer" | "visiting" | "external";
};

export type ProjectId =
  | "chronolog"
  | "coeus"
  | "dayu"
  | "hermes"
  | "iris"
  | "dtio"
  | "labios"
  | "storehub"
  | "viper"
  | "wisio";

export type Project = {
  id: ProjectId;
  name: string;
  title: string;
  shortDescription: string;
  link: string;
  isCollaborative?: boolean;
  isFeatured?: boolean;
  isOpenSource?: boolean;
  isOurs?: boolean;
  researchStatus: "ready" | "testing" | "r&d";
  status: "active" | "archived";
  type: "funded" | "student";
};

export type PublicationAuthor =
  | "A. Brusilovsky"
  | "A. Daftari"
  | "A. Eswaradass"
  | "A. Fleck"
  | "A. G. Singh"
  | "A. Gainaru"
  | "A. Geist"
  | "A. Gentile"
  | "A. Haider"
  | "A. Kougkas"
  | "A. Kravtsov"
  | "A. Nigmetov"
  | "A. R. Blatecky"
  | "A. Torres"
  | "A. Y. Zomaya"
  | "A.-A. Chien"
  | "B. Allcock"
  | "B. Alunkal"
  | "B. Feng"
  | "B. Long"
  | "B. Nicolae"
  | "B. Scholz"
  | "B. Toonen"
  | "B. Wang"
  | "B. Xie"
  | "B. Xu"
  | "B.-H. Park"
  | "C. Chen"
  | "C. Du"
  | "C. Feng"
  | "C. Huang"
  | "C. Jiang"
  | "C. Li"
  | "C. Maltzahn"
  | "C. Xu"
  | "C.-Z. Xu"
  | "D. Buettner"
  | "D. Buono"
  | "D. Fan"
  | "D. Georgakopoulos"
  | "D. He"
  | "D. J. Holmgren"
  | "D. Jin"
  | "D. Joslin"
  | "D. Khettry"
  | "D. Kimpe"
  | "D. Li"
  | "D. Morozov"
  | "D. Ren"
  | "D. Rover"
  | "D. Rudd"
  | "D. Wang"
  | "D. Zhao"
  | "E. Berrocal"
  | "E. Hocks"
  | "E. Waston"
  | "E.-S. Jun"
  | "F. Cappello"
  | "F. Checconi"
  | "F. Liang"
  | "G. Chen"
  | "G. Ge"
  | "G. Gibson"
  | "G. Grider"
  | "G. Heber"
  | "G. Laszewski"
  | "G. Wang"
  | "H. Che"
  | "H. Devarajan"
  | "H. Eslami"
  | "H. Jin"
  | "H. Lee"
  | "H. Najafi"
  | "H. Song"
  | "H. Tang"
  | "H. Trivino"
  | "H. Zhang"
  | "H. Zheng"
  | "H. Zhu"
  | "H. Zou"
  | "I. Raicu"
  | "I. Sadooghi"
  | "I. Yildirim"
  | "J. B. Kowalkowski"
  | "J. Bent"
  | "J. Brandt"
  | "J. Cernuda"
  | "J. Dennis"
  | "J. Firoz"
  | "J. Gawor"
  | "J. Gu"
  | "J. Gustafson"
  | "J. He"
  | "J. Hu"
  | "J. Jenkins"
  | "J. Ji"
  | "J. Kowalkowski"
  | "J. L. Bez"
  | "J. Li"
  | "J. Liu"
  | "J. Lofstead"
  | "J. Rosendale"
  | "J. N. Simone"
  | "J. Wang"
  | "J. White"
  | "J. Wu"
  | "J. Ye"
  | "J. Zhou"
  | "J. Zhu"
  | "J.-S. Yeom"
  | "K. Bateman"
  | "K. Cameron"
  | "K. Chanchio"
  | "K. Feng"
  | "K. Kwiat"
  | "K. Li"
  | "K. Mohror"
  | "K. Qiao"
  | "K. Velusamy"
  | "K. Wang"
  | "K. Xiao"
  | "K. Zhang"
  | "L. Bautista-Gomez"
  | "L. Gong"
  | "L. Guo"
  | "L. Logan"
  | "L. Ni"
  | "L. Piccoli"
  | "L. Pottier"
  | "L. Schneidenbach"
  | "L. Shen"
  | "L. Shou"
  | "L. Wang"
  | "L. Yan"
  | "L. Yu"
  | "M. Dorier"
  | "M. E. Papka"
  | "M. G. Venkata"
  | "M. Kotsifakou"
  | "M. Lang"
  | "M. Macalik"
  | "M. Mubarak"
  | "M. Noelle"
  | "M. Pantano"
  | "M. Papka"
  | "M. Paterno"
  | "M. Song"
  | "M. Tang"
  | "M. Wu"
  | "M. Zhang"
  | "M. Zou"
  | "N. Chen"
  | "N. Desai"
  | "N. Gnedin"
  | "N. Hu"
  | "N. Kamel"
  | "N. Lewis"
  | "N. Liu"
  | "N. Mehta"
  | "N. Rajesh"
  | "N. Seenu"
  | "N. Sun"
  | "N. Tallent"
  | "N. Zhang"
  | "O. Kogiou"
  | "O. Yildiz"
  | "P. C. Roth"
  | "P. Challa"
  | "P. Chen"
  | "P. Espina"
  | "P. Gujrati"
  | "P. Hong"
  | "P. Plaszezak"
  | "P. Rich"
  | "P. Shukla"
  | "P. Widener"
  | "P. Beckman"
  | "Q. Chen"
  | "Q. Hou"
  | "Q. Koziol"
  | "R. Brightwell"
  | "R. Ge"
  | "R. Gonzalez"
  | "R. Gupta"
  | "R. Kettimuthu"
  | "R. Latham"
  | "R. Madhuri"
  | "R. Nakhoul"
  | "R. Ranjan"
  | "R. Ross"
  | "R. Thakur"
  | "R. Wang"
  | "S. Anand"
  | "S. Bakre"
  | "S. Byna"
  | "S. Chen"
  | "S. Coghlan"
  | "S. Di"
  | "S. Ghosh"
  | "S. He"
  | "S. Herbein"
  | "S. Hu"
  | "S. Klasky"
  | "S. Lang"
  | "S. Levy"
  | "S. Liu"
  | "S. Ma"
  | "S. Mickelson"
  | "S. Moitra"
  | "S. Ren"
  | "S. Shankar"
  | "S. Song"
  | "S. Subramanya"
  | "S. T. Leutenegger"
  | "S. Wallace"
  | "S. Wang"
  | "S. Xu"
  | "S. Yang"
  | "S. Yao"
  | "S. Yoginath"
  | "S. Zhou"
  | "T. Fahringer"
  | "T. Jones"
  | "T. Kasampalis"
  | "T. Ke"
  | "T. Matsui"
  | "T. Peterka"
  | "T. Wu"
  | "T. Y. Li"
  | "V. K. Gurbani"
  | "V. K. Naik"
  | "V. Morozov"
  | "V. Vishwanath"
  | "W. Allcock"
  | "W. Cai"
  | "W. Chen"
  | "W. D. Gropp"
  | "W. Tang"
  | "W. Tao"
  | "W. Yang"
  | "W. Yu"
  | "W. Zhang"
  | "X. Chen"
  | "X. Duan"
  | "X. Fan"
  | "X. Feng"
  | "X. He"
  | "X. Huang"
  | "X. Li"
  | "X. Liao"
  | "X. Lu"
  | "X. Que"
  | "X. Wang"
  | "X. Wu"
  | "X. Xiong"
  | "X. Xu"
  | "X. Yang"
  | "X. Ye"
  | "X. Zhang"
  | "X. Zheng"
  | "X. Zhou"
  | "X. Zou"
  | "X.-H. Sun"
  | "Y. Bao"
  | "Y. Che"
  | "Y. Chen"
  | "Y. Cheng"
  | "Y. Fan"
  | "Y. Gao"
  | "Y. Han"
  | "Y. Li"
  | "Y. Liu"
  | "Y. Lu"
  | "Y. Luo"
  | "Y. Wang"
  | "Y. Xu"
  | "Y. Yan"
  | "Y. Yin"
  | "Y. Yu"
  | "Y. Zhuang"
  | "Y.-H. Liu"
  | "Z. Dang"
  | "Z. Fang"
  | "Z. Lan"
  | "Z. Li"
  | "Z. Pan"
  | "Z. Tang"
  | "Z. Wang"
  | "Z. Xu"
  | "Z. Ye"
  | "Z. Zhan"
  | "Z. Zheng"
  | "Z. Zhou"
  | "Z.-W. Xu";

export type PublicationTag =
  | "Accelerator"
  | "Access Pattern"
  | "Active Storage"
  | "AI for I/O"
  | "Apache Arrow"
  | "Bandwidth"
  | "Benchmark"
  | "Benchmarking"
  | "Best Paper Award"
  | "Big Data"
  | "Burst Buffers"
  | "C-AMAT"
  | "Cache Management"
  | "Cache System"
  | "Characterization"
  | "ChronoLog"
  | "Cloud Application"
  | "Clouds and Distributed Computing"
  | "Column store"
  | "Compression"
  | "Computer Architecture"
  | "Computing Education"
  | "Concurrency"
  | "Concurrent Average Memory Access Time"
  | "Concurrent Memory Access"
  | "Containers"
  | "Context Awareness"
  | "Coeus"
  | "DNN"
  | "DNN Model Transferring"
  | "DRAM"
  | "Darshan"
  | "Data Access Pattern"
  | "Data Aggregation"
  | "Data Analytics"
  | "Data Centers"
  | "Data Compression"
  | "Data Drilling"
  | "Data Integration"
  | "Data Layout"
  | "Data Operator"
  | "Data Pipeline"
  | "Data Placement"
  | "Data Prefetching"
  | "Data Reorganization"
  | "Data Replication"
  | "Data Scoring"
  | "Data Streaming"
  | "Data-Aware"
  | "Data-Centric"
  | "Data-Centric Architecture"
  | "Data-Centric Design"
  | "Data-Fetching"
  | "Data-Intensive"
  | "Data-Reduction"
  | "Datalabels"
  | "Decoupled I/O"
  | "Deep Learning"
  | "Deep Memory Hierarchy"
  | "Deployment"
  | "Disaggregated Memory"
  | "Distributed Data Structure"
  | "Distributed Log"
  | "Distributed Computing"
  | "Distributed Storage"
  | "Dynamic"
  | "Dynamic Choice"
  | "Dynamic Programming"
  | "Efficiency"
  | "Elastic Storage"
  | "Elastic System"
  | "Emerging Architectures"
  | "Emerging Technologies"
  | "Energy-Aware I/O"
  | "Engine"
  | "Evolutionary Algorithms"
  | "Exascale I/O"
  | "Feature Reduction"
  | "File Scoring"
  | "Filesystems"
  | "Flash Memory"
  | "GPU"
  | "Graph Applications"
  | "Graph Pattern Matching"
  | "HDF5"
  | "HPC"
  | "HPC Data Containers"
  | "Hardware"
  | "Hardware Abstraction"
  | "Hermes"
  | "Heterogeneous Buffering"
  | "Heterogeneous I/O"
  | "Hierarchical"
  | "Hierarchical Data Prefetching"
  | "Hierarchical Memory System"
  | "Hierarchical Storage"
  | "History of Computing"
  | "Hybrid Data Access Model"
  | "Hybrid Parallel File System"
  | "I/O"
  | "I/O Acceleration"
  | "I/O Analysis"
  | "I/O Behavior"
  | "I/O Bottleneck"
  | "I/O Bottleneck Detection"
  | "I/O Buffering"
  | "I/O Characterization"
  | "I/O Metrics"
  | "I/O Optimization"
  | "I/O Stack Tuning"
  | "I/O Tracing"
  | "In-Transit Computing"
  | "Inference Serving"
  | "Integrated Workflow"
  | "Intelligent Selection"
  | "KVS"
  | "Label-Based I/O"
  | "Layered Buffering"
  | "Layered Performance Matching (LPM)"
  | "Libraries"
  | "Library"
  | "Lightweight"
  | "Linux"
  | "Locality"
  | "MLP"
  | "Machine Learning"
  | "Matrix Multiplication"
  | "Metadata Management"
  | "Memory"
  | "Memory Architecture"
  | "Memory Concurrency"
  | "Memory Hierarchy"
  | "Memory Management"
  | "Memory Mapped I/O"
  | "Memory Performance Model"
  | "Memory Stall Time"
  | "Memory-Bounded Speedup"
  | "Memory-Wall"
  | "Middleware"
  | "Modeling"
  | "Multi-Tiered"
  | "Out-of-Core Analysis"
  | "Operating Systems"
  | "Parallel File System (PFS)"
  | "Parallel I/O"
  | "Parallel Computing"
  | "Parallelism"
  | "Performance Evaluation"
  | "Performance Measurement"
  | "Performance Modeling"
  | "Performance Optimization"
  | "Persistent Memory"
  | "Phase Change Memory"
  | "Prefetch"
  | "Processing-in-Memory"
  | "Programming Frameworks"
  | "Pruning"
  | "Python"
  | "Quality of Service"
  | "RAN"
  | "RPC over RDMA"
  | "ReRAM-based Accelerator"
  | "Reinforcement Learning"
  | "Representative"
  | "Resource Management"
  | "Resource Monitoring"
  | "Resource Provisioning"
  | "Scalability"
  | "Scalable Computing"
  | "Scientific Applications"
  | "Selection Algorithm"
  | "Server-Centric"
  | "Server-Push"
  | "Server-Side"
  | "Servers"
  | "Shared Log"
  | "Singularity"
  | "Solid State Drive"
  | "SpMM"
  | "Storage"
  | "Storage Auto-Tuning"
  | "Storage Bridging"
  | "Swapping"
  | "Synchronization"
  | "System Software"
  | "Task-Based I/O"
  | "Tensor"
  | "TensorFlow"
  | "Tiered Storage"
  | "Time Factors"
  | "Tools"
  | "Utilization"
  | "Virtualization"
  | "WisIO"
  | "Workflow Optimization"
  | "Workflow Priorities"
  | "Workflow-Aware"
  | "Workflows";

export type PublicationType =
  | "Conference"
  | "Journal"
  | "Book"
  | "Book Chapter"
  | "Poster"
  | "Technical Report"
  | "Thesis"
  | "WIP"
  | "Workshop";

export type Publication = {
  authors: PublicationAuthor[];
  title: string;
  venue: string;
  type: PublicationType;
  date: string;
  tags: PublicationTag[];
  links: Record<string, string>;
};
