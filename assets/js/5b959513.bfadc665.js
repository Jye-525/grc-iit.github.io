"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4413],{6161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=i(5893),s=i(1151),a=i(3161);const r={title:"DaYu: Optimizing Workflow Performance by Elucidating Semantic Data Flow"},o="DaYu: Optimizing Workflow Performance by Elucidating Semantic Data Flow",c={type:"mdx",permalink:"/research/projects/dayu",source:"@site/src/pages/research/projects/dayu.mdx",title:"DaYu: Optimizing Workflow Performance by Elucidating Semantic Data Flow",description:"Distributed scientific workflows nowadays face challenges in data movement through storage systems.",frontMatter:{title:"DaYu: Optimizing Workflow Performance by Elucidating Semantic Data Flow"},unlisted:!1},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Background",id:"background",level:2},{value:"Approach",id:"approach",level:2},{value:"Case Study I: Storm Tracking Workflow",id:"case-study-i-storm-tracking-workflow",level:2},{value:"Case Study II: DeepDriveMD Workflow",id:"case-study-ii-deepdrivemd-workflow",level:2},{value:"Workflow Task-File DAG",id:"workflow-task-file-dag",level:3},{value:"Semantic DAG 1",id:"semantic-dag-1",level:3},{value:"Semantic DAG 2",id:"semantic-dag-2",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Members",id:"members",level:2},{value:"Sponsor",id:"sponsor",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(148).Z,width:"200"})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dayu-optimizing-workflow-performance-by-elucidating-semantic-data-flow",children:"DaYu: Optimizing Workflow Performance by Elucidating Semantic Data Flow"})}),"\n",(0,t.jsx)(a.Z,{projectId:"dayu"}),"\n",(0,t.jsx)(n.p,{children:"Distributed scientific workflows nowadays face challenges in data movement through storage systems.\nDaYu employs careful runtime measurement, maps domain semantics to low-level I/O operations, and utilizes\neffective visualization and analysis of semantic data flows to understand how semantic datasets move through storage."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"High-Performance Computing (HPC) workflows are evolving with increasing data intensity.\nThese workflows are growing in complexity, featuring multiple stages encompassing simulation, analysis,\nand AI applications with diverse data demands.\nData transfer between HPC tasks currently relies on shared storage layers like Parallel File System (PFS)\nand Burst Buffer, which can suffer from slow access and I/O contention."}),"\n",(0,t.jsx)(n.p,{children:"Enhancing data movement within workflows poses a significant challenge.\nStrategic task scheduling, data caching, and staging have emerged as\neffective means to boost I/O performance by reducing computation wait times.\nWith more I/O expertise, one can also utilize and fine-tune various I/O\nlibraries, middleware, and file system configurations. The tuning often\nrequires iterative testing and are limited to specific workload, whille other\nworkloads still experiencing high latency with shared storage."}),"\n",(0,t.jsx)(n.p,{children:"Understanding I/O behavior is imperative when deciding on the correct strategies to enhance data access.\nDetails about data access within workflow tasks can effectively guide improvements in I/O and system configuration.\nExisting application I/O profiling tools lack the ability to provide analyze of data access behavior across\ntasks in a workflow and capture semantic\ninformation related to its low-level I/O requests. Such tools would\nbe valuable for providing more straightforward insights into\ndata access patterns across multiple tasks. By filling this gap, we\ncan develop better methods for managing data movement and\noptimizing the overall workflow."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"In this work, we unveil a fresh workflow optimization perspective with"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"careful runtime measurement of data access metrics,"}),"\n",(0,t.jsx)(n.li,{children:"recovering the mapping of domain semantics to low-level I/O operations, and"}),"\n",(0,t.jsx)(n.li,{children:"effective visualization and analysis of semantic data flows for the complete workflow."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(9401).Z,width:"500"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HDF5 File Structure Overview"})})]}),"\n",(0,t.jsx)(n.p,{children:"HDF5 is a widely used storage format and I/O libraries in scientific applications"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hierarchical structure of groups, datasets, and attributes"}),"\n",(0,t.jsx)(n.li,{children:"Allows enriched metadata that describes different data characteristics"}),"\n",(0,t.jsx)(n.li,{children:"Extensive API enabling tracking of its high-level data object and the low-level I/O"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach",children:"Approach"}),"\n",(0,t.jsx)(n.p,{children:"The project's major challenges include mapping data semantics to I/O access,\ntracking data flow across tasks, and visualizing coordination and time.\nOur approach consists of three steps:"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(7328).Z,width:"800"})})}),"\n",(0,t.jsx)(n.h2,{id:"case-study-i-storm-tracking-workflow",children:"Case Study I: Storm Tracking Workflow"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PyFLEXTRKR"})," uses a flexible atmospheric feature tracking software package\nfor weather research and forecast datasets."]}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(4973).Z,width:"800"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Six-Stages Pipeline PyFLEXTRKR Workflow."})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Observations"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Inter-task Data Reuse"}),": task 2, 4, and 6 uses files produced by the first task."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Time-dependents inputs"}),": some input files are required at different time point."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Data None-Used"}),": file produced by task 4 is not used by any later task."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Opportunities"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tasks that use common datasets can be scheduled on the same resource."}),"\n",(0,t.jsx)(n.li,{children:"Input can be stage-in at different time points of the workflow."}),"\n",(0,t.jsx)(n.li,{children:"not used by later tasks can be immediately offloaded to free up memory."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"case-study-ii-deepdrivemd-workflow",children:"Case Study II: DeepDriveMD Workflow"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DeepDriveMD"})," (DDMD) is a deep learning-driven molecular dynamics\nsimulations workflow for protein folding."]}),"\n",(0,t.jsx)(n.h3,{id:"workflow-task-file-dag",children:"Workflow Task-File DAG"}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(9).Z,width:"800"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Four-Stages Pipeline Workflow (simulation, aggregate, train, and inference)."})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Observation"}),": No data dependencies between ",(0,t.jsx)(n.code,{children:"Train"})," and ",(0,t.jsx)(n.code,{children:"Inference"})," tasks,\nas we can see that both of them reads input aggregated.h5, and output different\nsets of files that are not used by each other."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Opportunity"}),": ",(0,t.jsx)(n.code,{children:"Inference"})," and ",(0,t.jsx)(n.code,{children:"Train"})," tasks can be parallelized\nwithout violating data dependency correctness."]}),"\n",(0,t.jsx)(n.h3,{id:"semantic-dag-1",children:"Semantic DAG 1"}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(8e3).Z,width:"800"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Aggregate Stage Close-Up Semantic DAG with Two Datasets."})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Observation"}),": The ",(0,t.jsx)(n.code,{children:"Aggregate"})," task alters the data layout of large datasets without changing the content.\nOver 95% of the data volume is from the ",(0,t.jsx)(n.code,{children:"contact_map"})," dataset, while only small amount is from the\n",(0,t.jsx)(n.code,{children:"point_cloud"})," dataset."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Opportunity"}),": Removing the ",(0,t.jsx)(n.code,{children:"Aggregate"})," task does not compromise the correctness of the program.\nWe have ",(0,t.jsx)(n.code,{children:"Train"})," and ",(0,t.jsx)(n.code,{children:"Inference"})," task reading input directly from simulation, this can reduce unnecessary\ndata manipulation and movement and improve data access parallelism."]}),"\n",(0,t.jsx)(n.h3,{id:"semantic-dag-2",children:"Semantic DAG 2"}),"\n",(0,t.jsxs)("center",{children:[(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(4499).Z,width:"800"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DDMD Train Stage Read File I/O Performance Detail."})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Observation"}),": The ",(0,t.jsx)(n.code,{children:"Train"})," task is not accessing all the datasets present in the ",(0,t.jsx)(n.code,{children:"aggregated.h5"})," file.\nIn fact, it is not using the largest datasets which takes up 95% of the file space (from previous observation)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Opportunities"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Removing the ",(0,t.jsx)(n.code,{children:"Aggregate"})," task can minimize unnecessary data transfers."]}),"\n",(0,t.jsxs)(n.li,{children:["Caching a subset of the ",(0,t.jsx)(n.code,{children:"aggregated.h5"})," file does not violate task-data dependencies."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Nowadays in HPC applications, there is a lack of tools to understand\ndata flow between tasks in a workflow. This study introduced Semantic DAGs,\nan enriched version of traditional DAGs. Precise measurements allowed us\nto reconstruct mappings between tasks and meaningful data objects down to\nI/O with file addresses. With visualization of task-to-data mapping and\nextracted performance statistics, we can gain new insight into workflow\noptimization opportunities."}),"\n",(0,t.jsx)(n.p,{children:"Our future work will focus on enhancing the analysis method and creating\na generalized approach for customized data placement in workflows.\nWe aim to achieve this through I/O buffering middleware and apply our\nanalysis for effective I/O system tuning to meet workload requirements."}),"\n",(0,t.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Meng Tang","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PhD Student @ GRC"}),"\n",(0,t.jsx)(n.li,{children:"Illinois Institute of Technology"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:mtang11@hawk.iit.edu",children:"Contact"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.pnnl.gov/people/nathan-tallent",children:"Dr. Nathan R. Tallent"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Co-Principal Investigator"}),"\n",(0,t.jsx)(n.li,{children:"Pacific Northwest National Laboratory (PNNL)"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:nathan.tallent@pnnl.gov",children:"Contact"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.iit.edu/directory/people/antonios-kougkas",children:"Dr. Anthony Kougkas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Co-Principal Investigator"}),"\n",(0,t.jsx)(n.li,{children:"Illinois Institute of Technology"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:akougkas@iit.edu",children:"Contact"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.iit.edu/directory/people/xian-he-sun",children:"Dr. Xian-He Sun"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Principal Investigator"}),"\n",(0,t.jsx)(n.li,{children:"Illinois Institute of Technology"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:sun@iit.edu",children:"Contact"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sponsor",children:"Sponsor"}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(2215).Z,width:"100"})}),"\n",(0,t.jsx)(n.p,{children:'This research is supported by the U.S. Department of Energy (DOE) through\nthe Office of Advanced Scientific Computing Research\'s\n"Orchestration for Distributed & Data-Intensive Scientific Exploration."'}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:i(1188).Z,width:"100"})}),"\n",(0,t.jsx)(n.p,{children:"This research is also based upon work supported by the\nNational Science Foundation under Grant no.\nNSF CSSI-2104013."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3161:(e,n,i)=>{i.d(n,{Z:()=>r});i(7294);var t=i(512),s=i(866),a=i(5893);function r(e){let{addMargin:n=!0,projectId:i}=e;const{isOpenSource:r=!1,isOurs:o=!1,type:c}=(0,s.R)(i),d="funded"===c;return d||r||o?(0,a.jsxs)("div",{className:(0,t.Z)(n&&"margin-bottom--md"),style:{lineHeight:1},children:[o&&(0,a.jsx)("span",{className:"badge badge--primary margin-horiz--xs",children:"GRC-LED"}),d&&(0,a.jsx)("span",{className:"badge badge--success margin-horiz--xs",children:"FUNDED"}),r&&(0,a.jsx)("span",{className:"badge badge--secondary margin-horiz--xs",children:"OPEN SOURCE"})]}):null}},866:(e,n,i)=>{i.d(n,{R:()=>a,Z:()=>s});const t=[{id:"coeus",name:"Coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"chronolog",name:"ChronoLog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"iris",name:"IRIS",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"hermes",name:"Hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"labios",name:"Labios",title:"LABIOS: A Distributed Label-Based I/O System",shortDescription:"HPC and Big Data environments have diverged over the years, resulting in diverging and even conflicting I/O requirements. Labios aims to address the challenges vital to HPC + Big Data Convergence",link:"/research/projects/labios",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dtio",name:"DTIO",title:"DTIO: A Data Task I/O Runtime",shortDescription:"In partnership with Argonne National Laboratory, DTIO investigates the use of a task framework for unifying complex I/O stacks and providing features such as resilience, fault-tolerance, and task replay.",link:"/research/projects/dtio",isFeatured:!1,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"viper",name:"Viper",title:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models",shortDescription:"Within a DL workflow, exchanging DNN models through PFS may result in  high model update latency and discovery latency. Moreover, model update frequency affects both training and inference performance. Viper is an I/O framework aiming to accelerate model discovery and delivery, and to find an optimal model checkpoint schedule to balance the trade-off.",link:"/research/projects/viper",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dayu",name:"DaYu",title:"DaYu: Optimizing Distributed Scientific Workflows by Decoding Dataflow Semantics and Dynamics",shortDescription:"Nowadays, distributed scientific workflows encounter challenges in data movement through storage systems. DaYu, by capturing the mapping of data objects to I/O operations, can uncover new insights for optimizing workflow data movement.",link:"/research/projects/dayu",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"wisio",name:"WisIO",title:"WisIO: Automated I/O Bottleneck Detection via Multi-Perspective Views for HPC Workloads",shortDescription:"Explore WisIO, an automated I/O bottleneck detection tool with multi-perspective views for I/O trace data analysis. Overcoming large-scale I/O challenges, WisIO utilizes distributed computing and an extensible rule engine for tailored solutions. Elevate your I/O analysis in HPC environments with WisIO.",link:"/research/projects/wisio",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"student"},{id:"storehub",name:"StoreHub",title:"StoreHub",shortDescription:"StoreHub is a collaborative platform designed to advance data storage research by providing a specialized infrastructure that meets the unique needs of researchers. It brings together experts handling large amounts of data, focusing on I/O performance, and developing innovative storage solutions, making it a vital resource for the community.",link:"/research/projects/storehub",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"}],s=t;function a(e){return t.find((n=>n.id===e))}},2215:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/doe-822c0ac8103843a4445244cc56c3f792.png"},1188:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/nsf-fb7efe9286a9b499c5907d82af3e70fd.png"},8e3:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/DDMD_aggregate_detail-1a5279f54d77cc151d48d661c0c0ed44.png"},4499:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/DDMD_train_dset-a3d6ccda7c6e8e4052500a9d4b182a24.png"},9:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/DDMD_workflow-boxed-e0a1869e02a03a8d82f1c60966c5c7fd.png"},7328:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Graph-Overview-cad5b28b88140da124417cb4e2f32658.png"},148:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/dayu-logo2-24f251d13254d9efed5f23ea01af9f75.png"},9401:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/hdf5_structure-15509d44791e320843dcca25085602c3.png"},4973:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/wrf_pyflextrkr_workflow-341a7b60a5413ec32baf02784773ea17.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);