"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[347],{4935:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(5893),i=r(1151);const s={title:"Hardware Overview"},t="Hardware Overview",a={type:"mdx",permalink:"/resources/hardware-overview",source:"@site/src/pages/resources/hardware-overview.mdx",title:"Hardware Overview",description:"Our members enjoy access to several resources, including:",frontMatter:{title:"Hardware Overview"},unlisted:!1},c={},l=[{value:"Testbed Systems",id:"testbed-systems",level:2},{value:"Overview",id:"overview",level:3},{value:"Usage Policy",id:"usage-policy",level:3},{value:"Local Computing Resources",id:"local-computing-resources",level:3},{value:"<em>Ares Cluster</em>",id:"ares-cluster",level:4},{value:"<em>HEC Cluster</em>",id:"hec-cluster",level:4},{value:"External Computing Resources",id:"external-computing-resources",level:3},{value:"Conferences",id:"conferences",level:2},{value:"Journals",id:"journals",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"hardware-overview",children:"Hardware Overview"})}),"\n",(0,o.jsx)(n.p,{children:"Our members enjoy access to several resources, including:"}),"\n",(0,o.jsx)(n.h2,{id:"testbed-systems",children:"Testbed Systems"}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The Gnosis Research Center (GRC) Lab manages several cluster computers to support the group's research.\nCluster resources within the lab are controlled via a batch queuing system that coordinates all jobs running\non the clusters. The nodes should not be accessed directly, as the scheduler will allocate resources such as\nCPU, Memory and Storage exclusively to each job."}),"\n",(0,o.jsx)(n.p,{children:"Once you have access to use the cluster, you can submit, monitor, and cancel jobs from the head nodes,\nares.cs.iit.edu and hec.cs.iit.edu. These two nodes should not be used for any compute-intensive work,\nhowever you can get a shell on a compute node simply by starting an interactive job. You can use the\ncluster by starting batch jobs or interactive jobs. Interactive jobs give you access to a shell on one\nof the nodes, from which you can execute commands by hand, whereas batch jobs run from a given shell\nscript in the background and automatically terminate when finished."}),"\n",(0,o.jsxs)(n.p,{children:["If you encounter any problems using the cluster, please send us a request via ",(0,o.jsx)(n.a,{href:"mailto:grc@iit.edu",children:"grc@iit.edu"})," and be as\nspecific as you can when describing your issue."]}),"\n",(0,o.jsx)(n.h3,{id:"usage-policy",children:"Usage Policy"}),"\n",(0,o.jsxs)(n.p,{children:["Regular members of the GRC enjoy access to the resources. If you wish to gain access to the cluster\nand you do not belong to the core team, please submit and request via ",(0,o.jsx)(n.a,{href:"mailto:grc@iit.edu",children:"grc@iit.edu"})," and state the following:\n(i) your CS login ID, (ii) name of professor you're working with (and put him under cc on the form) (iii)\nreasons for requesting access (i.e., research project description) (iv) projected time period for which you\nwould need access (v) resources that you may interfere other uses significantly (e.g., global file system,\nnetwork) (vi) commands that you need to run as root privilege."]}),"\n",(0,o.jsxs)(n.p,{children:["If we have any trouble with your job, we will try to get in touch with you but we reserve the right to kill\nyour jobs at any time. If you have questions about the cluster, send us a request at ",(0,o.jsx)(n.a,{href:"mailto:grc@iit.edu",children:"grc@iit.edu"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"local-computing-resources",children:"Local Computing Resources"}),"\n",(0,o.jsx)(n.p,{children:"The GRC manages two cluster computers, Ares and HEC, each for different research scope. Our flagship cluster\nis Ares with 1576 cores and a 30TFLOPs peak performance. HEC is a smaller 128 core machine that specializes to\nnetwork research. All HEC nodes are connected with InfiniBand network powered by Mellanox InfiniHost III Ex\nadapters. You can find the detailed hardware configurations below."}),"\n",(0,o.jsx)(n.h4,{id:"ares-cluster",children:(0,o.jsx)(n.em,{children:"Ares Cluster"})}),"\n",(0,o.jsx)(n.p,{children:"The Ares cluster is composed of one rack of compute nodes. All the nodes share a 48TB RAID-5 storage pool comprised of eight 8TB 7200K SAS hard drives. Nodes in each rack are connected with\n40Gbps Ethernet with RoCE support. One 200Gbps uplink connects two racks of nodes. The compute rack consists of\none ThinkSystem SR650 master node, 32 ThinkSystem SR630 compute nodes. In total, the compute rack has 66 2.2GHz\nXeon Scalable Silver 4114 processors with boosted frequency up to 3.0GHz, which leads to 660 cores and 1320 threads.\nThe master node and the compute nodes are equipped with 96GB and 48GB DDR4-2400 memory, 128GB and 32GB M.2 SSD for\nOS, respectively. 24 compute nodes are equipped with one 250GB M.2 Samsung 960 Evo SSD. The other eight are equipped\nwith one 256 GB M.2 Toshiba RD400 SSD."}),"\n",(0,o.jsxs)(n.p,{children:["Read more in the ",(0,o.jsx)(n.a,{href:"/docs/category/ares-research-cluster",children:"Ares User Guide"})]}),"\n",(0,o.jsx)(n.h4,{id:"hec-cluster",children:(0,o.jsx)(n.em,{children:"HEC Cluster"})}),"\n",(0,o.jsx)(n.p,{children:"The HEC cluster is comprised by 16 Sun Fire X2200 nodes and one Sun Fire X4240 head node. This mini cluster is\nideal for InfiniBand-related tests. All nodes are connected with InfiniBand network powered by Mellanox InfiniHost\nIII Ex adapters. The 5TB RAID-5 storage pool provides the global storage for all the nodes. The X4240 node, serving\nas the master node, is equipped with two quad-core 2.7GHz Opteron 2384 processors, 32GB DDR2-667 memory and two 250GB\nSamsung 860 Evo SATA SSDs in RAID-1 configuration. The X2200 nodes, serving as the compute nodes, are equipped with\ntwo quad-core Opteron 2376 processors running at 2.3GHz, 16GB DDR2-667 memory, one 100GB OCZ RevoDrive X2 PCIe SSD,\nand one 1TB Seagate 7200K SATA hard drive."}),"\n",(0,o.jsx)(n.h3,{id:"external-computing-resources",children:"External Computing Resources"}),"\n",(0,o.jsx)(n.p,{children:'We also have access to the Chameleon Cloud platform. It is consisted with two clusters located in Texas Advanced\nComputing Center (TACC) at Texas and University of Chicago. It has 338 compute nodes connected with 10Gbps Ethernet\nnetwork. Among all compute nodes, 41 of them are connected via InfiniBand as well. Each compute node has four 6-core\n(12 threads) Intel Xeon E5-2670 v3 "Haswell" processors and 128GiB RAM. There are also 24 storage nodes with 16 2TB\nhard drives and 20 GPU nodes. In total, the Chameleon Cloud platform has 13,056 cores, 66 TiB of RAM, and 1.5PB of\nconfigurable storage.'}),"\n",(0,o.jsx)(n.h2,{id:"conferences",children:"Conferences"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://computingfrontiers.org/",children:"ACM International Conference on Computing Frontiers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.hpdc.org/",children:"ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.sigmetrics.org/",children:"ACM SIGMETRICS/IFIP Performance"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://sigmod.org/",children:"ACM SIGMOD/PODS International Conference on Management of Data (SIGMOD)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://acmsocc.org/",children:"ACM Symposium on Cloud Computing (SoCC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.sosp.org/",children:"ACM Symposium on Operating Systems Principles (SOSP)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://spaa.acm.org/",children:"ACM Symposium on Parallelism in Algorithms and Architectures (SPAA)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.podc.org/",children:"ACM Symposium on Principles of Distributed Computing (PODC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.isfpga.org/",children:"ACM/SIGDA International Symposium on Field-Programmable Gate Arrays (FPGA)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.eurosys.org/",children:"European Conference on Computer Systems (EuroSys)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.isc-hpc.com/",children:"ISC High Performance (ISC-HPC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://link.springer.com/conference/ica3pp",children:"International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://ieeexplore.ieee.org/xpl/conhome/1000213/all-proceedings",children:"International Conference on Distributed Computing Systems (ICDCS)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.ics-conference.org/",children:"International Conference on Supercomputing (ICS)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://euro-par.org",children:"International European Conference on Parallel and Distributed Computing (Euro-Par)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.ppopp.org/",children:"Principles and Practice of Parallel Programming (PPoPP)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.clustercomp.org/",children:"The IEEE International Conference on Cluster Computing (CLUSTER)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://hipc.org/",children:"The IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.ipdps.org/",children:"The IEEE International Parallel & Distributed Processing Symposium (IPDPS)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://hpca-conf.org/",children:"The IEEE International Symposium on High-Performance Computer Architecture (HPCA)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://bdcat-conference.org/",children:"The IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://ieeexplore.ieee.org/xpl/conhome/1000093/all-proceedings",children:"The IEEE/ACM International Symposium on Cluster Computing and the Grid (CCGRID)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://microarch.org/",children:"The IEEE/ACM International Symposium on Microarchitecture (MICRO)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://supercomputing.org/",children:"The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.hipeac.net",children:"The International Conference on High Performance and Embedded Architectures and Compilers (HiPEAC)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://ieeexplore.ieee.org/xpl/conhome/1000535/all-proceedings",children:"The International Conference on Parallel Architectures and Compilation Techniques (PACT)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://iscaconf.org/",children:"The International Symposium on Computer Architecture (ISCA)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://performance2023.sciencesconf.org/",children:"The International Symposium on Computer Performance, Modeling, Measurements and Evaluation (PERFORMANCE)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.hotchips.org/",children:"The International Symposium on High Performance Chips (HOT CHIPS)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.usenix.org/conferences/byname/146",children:"USENIX Conference on File and Storage Technologies (FAST)"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"journals",children:"Journals"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.springer.com/computer/communication+networks/journal/10586",children:"Cluster Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.wiley.com/en-us/Concurrency+and+Computation%3A+Practice+and+Experience-p-9780JNRL00556",children:"Concurrency and Computation: Practice and Experience"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.springer.com/journal/446",children:"Distributed Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.springer.com/journal/10619",children:"Distributed and Parallel Databases"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.comsoc.org/commag",children:"IEEE Communications"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/computer",children:"IEEE Computer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4434",children:"IEEE Concurency"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/internet",children:"IEEE Internet Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/micro",children:"IEEE Micro"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.comsoc.org/netmag",children:"IEEE Network"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/pervasive",children:"IEEE Pervasive Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/tc",children:"IEEE Transactions on Computers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/tdsc",children:"IEEE Transactions on Dependable and Secure Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.computer.org/tpds",children:"IEEE Transactions on Parallel and Distributed Systems"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://hpc.sagepub.com/",children:"International Journal of High Performance Computing Applications"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.worldscientific.com/worldscinet/ijhsc",children:"International Journal of High Speed Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dblp.uni-trier.de/db/journals/jwsr/index.html",children:"International Journal of Web Services Research"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://jcste.ict.ac.cn/",children:"Journal of Computer Science and Technology"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.springer.com/journal/10723/",children:"Journal of Grid Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.elsevier.com/locate/peva",children:"Journal of Performance Evaluation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"http://www.journals.elsevier.com/parallel-computing/",children:"Parallel Computing"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://epubs.siam.org/journal/sjoce3",children:"SIAM Journal on Scientific Computing"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var o=r(7294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);