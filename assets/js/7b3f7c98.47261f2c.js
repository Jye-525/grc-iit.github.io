"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4447],{1464:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var i=s(5893),r=s(1151);const t={},d="Examples",l={id:"hermes/components/examples",title:"Examples",description:"Ares (IIT)",source:"@site/docs/03-hermes/08-components/10-examples.md",sourceDirName:"03-hermes/08-components",slug:"/hermes/components/examples",permalink:"/docs/hermes/components/examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prefetcher",permalink:"/docs/hermes/components/prefetcher"},next:{title:"Tagging",permalink:"/docs/hermes/components/tagging"}},c={},h=[{value:"Ares (IIT)",id:"ares-iit",level:2},{value:"Performance",id:"performance",level:3},{value:"Memory",id:"memory",level:4},{value:"Storage",id:"storage",level:4},{value:"Networking",id:"networking",level:4},{value:"Chameleon (TACC)",id:"chameleon-tacc",level:2},{value:"Standard Cloud Units",id:"standard-cloud-units",level:3},{value:"Tier Characterization",id:"tier-characterization",level:2},{value:"Layer (Level?)",id:"layer-level",level:2}];function a(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h2,{id:"ares-iit",children:"Ares (IIT)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Ares - simplified structure",src:s(9391).Z+"",width:"534",height:"489"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Ares - network topology",src:s(2252).Z+"",width:"1027",height:"771"})}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)("p",{children:"Compute Rack"})}),(0,i.jsx)("th",{children:(0,i.jsx)("p",{children:"Interconnect"})}),(0,i.jsx)("th",{children:(0,i.jsx)("p",{children:"Storage Rack"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("p",{children:["8x ",(0,i.jsx)("strong",{children:"C1"})," nodes w/ Samsung 960 Evo 250GB NVMe SSD"]})}),(0,i.jsx)("td",{rowspan:"2",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"1x 40 Gbps ethernet port"}),(0,i.jsx)("li",{children:"1x 1 Gbps ethernet"}),(0,i.jsx)("li",{children:"200Gbps uplink switch"})]})}),(0,i.jsx)("td",{rowspan:"2",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Seagate 1TB SATA HDD"}),(0,i.jsx)("li",{children:"Samsung 860 Evo 250GB SATA SSD"})]})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:(0,i.jsxs)("p",{children:["24x ",(0,i.jsx)("strong",{children:"C2"})," nodes w/ Toshiba OCZ RD400 256GB NVMe SSD"]})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What kind of CPU(s)?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Intel Xeon silver 4114"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["How much memory and what kind?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"128GB DDR4-2400 (need to double check)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["What's the OS? (kernel version, etc.)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenHPC(GCC 4.8.5) on login and compute nodes, CentOS(GCC 7.3.0)\nand on storage nodes. (Need to double check)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["How is the system configured? (file systems, networking, etc.)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All nodes are equipped with one Mellanox 40Gbps adapter."}),"\n",(0,i.jsx)(n.li,{children:"Each compute/storage node has one high-speed (40Gbps) Ethernet\nand one low-speed (1Gbps) Ethernet."}),"\n",(0,i.jsx)(n.li,{children:"Compute node 31, 32 and the master node are connected to the\nhigh-speed switch in the storage rack."}),"\n",(0,i.jsx)(n.li,{children:"Compute and storage nodes are connected to different switches\nwhich are connected with a 200Gbps uplink."}),"\n",(0,i.jsx)(n.li,{children:"The network speed on the storage nodes are limited by the PCIe\n2.0 standard, which is around 1GB/s."}),"\n",(0,i.jsx)(n.li,{children:"OrangeFS 2.9.7 has been installed into /opt/ohpc/pub/orangefs.\nEvery user can run it and access it from MPI applications with\nproper configuration in the MPI library."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,i.jsx)(n.h4,{id:"memory",children:"Memory"}),"\n",(0,i.jsx)(n.p,{children:"RDMA max bandwidth is around 37 Gb/s."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ARES RDMA Bandwidth",src:s(4864).Z+"",width:"931",height:"604"})}),"\n",(0,i.jsxs)(n.p,{children:["Memory bandwidth (",(0,i.jsx)(n.a,{href:"https://www.cs.virginia.edu/stream/",children:"STREAM\nbenchmark"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Compute node (Lenovo): 49 GB/s\n(",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1QQPs-NwI-tqaUmA3CnpztY3i2pkVujSAVoliSnTBlPQ/edit",children:"reference"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Storage node (Sun): 7GB/s\n(",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1jkOKFvc7ueLkP6kjJgOhgK7k-LMq-jMIaTVuHmTzA5M/edit",children:"reference"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Memory latency (",(0,i.jsx)(n.a,{href:"https://github.com/torvalds/test-tlb",children:"TLB benchmark"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Huge/regular page seq: 7ns"}),"\n",(0,i.jsx)(n.li,{children:"Huge page rand: 92 ns"}),"\n",(0,i.jsx)(n.li,{children:"Regular page rand: 108 ns"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/1piDh07T3fX5tlel4NdrsxvkFy_Ojopa1dbkN1X5AruE/edit#gid=0",children:"numbers are\nfrom"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"storage",children:"Storage"}),"\n",(0,i.jsxs)(n.p,{children:["Disk bandwidth (",(0,i.jsx)(n.a,{href:"https://fio.readthedocs.io/en/latest/fio_doc.html",children:"fio"}),"\nbenchmark):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://ares.cs.iit.edu/baseline-perf/",children:"test script can be found"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://ares.cs.iit.edu/baseline-perf/local_disk/comp-samsung-nvme.html",children:"Compute node (Samsung\nNVMe)"}),"\n& ",(0,i.jsx)(n.a,{href:"https://ares.cs.iit.edu/baseline-perf/local_disk/comp-toshiba-nvme.html",children:"Compute node (Toshiba\nNVMe)"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Read max: 2.5GB/s"}),"\n",(0,i.jsx)(n.li,{children:"Write max: 1GB/s"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://ares.cs.iit.edu/baseline-perf/local_disk/stor-ssd-pcie-sata.html",children:"Storage node (Samsung SATA SSD) with PICe\nadapter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Read/Write max: 400MB/s"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://ares.cs.iit.edu/baseline-perf/local_disk/stor-hdd-sata.html",children:"Storage node (Samsung SATA)\nHDD"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Read/Write max: 180MB/s"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"networking",children:"Networking"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.google.com/spreadsheets/d/1bngw2dXIamtT7rvPcultBxF5lyhubNCmK2BkkIr5vAc/edit#gid=686223677",children:"Numbers are\nfrom"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Direction"}),(0,i.jsx)(n.th,{children:"Latency (us)"}),(0,i.jsx)(n.th,{children:"Max Bandwidth (Gb/s)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Compute - compute node"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"37"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Compute - storage node"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Storage - storage node"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"12.5"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"chameleon-tacc",children:"Chameleon (TACC)"}),"\n",(0,i.jsx)(n.p,{children:"The Chameleon architecture consists of a set of standard cloud units\n(SCUs)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Chameleon - One Unit of SCU Hardware Summary",src:s(26).Z+"",width:"693",height:"234"})}),"\n",(0,i.jsx)(n.h3,{id:"standard-cloud-units",children:"Standard Cloud Units"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What kind of CPU(s)?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each compute node is with 24 cores delivered in dual socket\nIntel Xeon E5-2670 v3 \u201cHaswell\u201d processors (each with 12 cores @\n2.3GHz)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["How much memory and what kind?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"128 GiB of DDR4 RAM."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["What's the OS? (kernel version, etc.)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OS is configurable by the user."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["How is the system configured? (file systems, networking, etc.)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Every switch in the research network is a fully OpenFlow\ncompliant programmable Dell S6000-ON switch."}),"\n",(0,i.jsx)(n.li,{children:"Each node connects to this network at 10 Gbps, and each unit\nuplinks with 40Gbps per rack to the Chameleon core network."}),"\n",(0,i.jsx)(n.li,{children:"The core switches (Dell S6000-ON) are connected by 40 Gbps\nEthernet links, which connect to the backbone 100Gbps services\nat both UC and TACC."}),"\n",(0,i.jsx)(n.li,{children:"Chameleon also provides a shared storage system. The shared\nstorage provides more than 3.6PB of raw disk."}),"\n",(0,i.jsxs)(n.li,{children:["Heterogeneous Compute Hardware","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The heterogeneous hardware includes various technologies:\nGPU and FPGA accelerators, SSD and NVMe storage, low-power\nARM, Atom, and Xeon systems-on-a-chip."}),"\n",(0,i.jsx)(n.li,{children:"The two storage hierarchy nodes have been designed to enable\nexperiments using multiple layers of caching: they are\nconfigured with 512 GiB of memory, two Intel P3700 NVMe of 2\nTB each, four Intel S3610 SSDs of 1.6 TB each, and four 15K\nSAS HDDs of 600 GB each."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tier-characterization",children:"Tier Characterization"}),"\n",(0,i.jsx)(n.p,{children:"A tier is a class of storage devices that share certain characteristics\nincluding:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Symbol"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Unit"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"L"}),(0,i.jsx)(n.td,{children:"Latency"}),(0,i.jsx)(n.td,{children:"ns"}),(0,i.jsx)(n.td,{children:"How is it measured?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"B"}),(0,i.jsx)(n.td,{children:"Bandwidth"}),(0,i.jsx)(n.td,{children:"GB/s"}),(0,i.jsx)(n.td,{children:"How is it measured?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"C"}),(0,i.jsx)(n.td,{children:"Total capacity"}),(0,i.jsx)(n.td,{children:"GB"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Q"}),(0,i.jsx)(n.td,{children:"Request queue depth"}),(0,i.jsx)(n.td,{children:"n/a"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The previous characteristics are considered constant during a Hermes\nsession. In addition, the following time-dependent characteristics are\nconsidered:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Symbol"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Unit"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"R"}),(0,i.jsx)(n.td,{children:"Remaining capacity"}),(0,i.jsx)(n.td,{children:"GB"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"F"}),(0,i.jsx)(n.td,{children:"Request queue fill"}),(0,i.jsx)(n.td,{children:"%"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.p,{children:'To keep the terminology simple, we will refer to the storage devices of\na certain tier class collectively as "the tier."'}),"\n",(0,i.jsx)(n.p,{children:"Tiers are (pairwise) disjoint, i.e., no storage device can belong to\nmore than one tier."}),"\n",(0,i.jsx)(n.p,{children:"There are intra-tier and inter-tier connections (i.e., between tiers via\nsuitable buses or interconnects). Data transfer via these connections\nmay or may not require CPU intervention."}),"\n",(0,i.jsx)(n.p,{children:'The grouping of storage devices into tiers has nothing to do with the\nphysical distribution of the devices. For example, the fact that two\nstorage devices are of RAM-class doesn\'t say anything about their\n"proximity", which is defined by the intra-tier connectivity.'}),"\n",(0,i.jsx)(n.h2,{id:"layer-level",children:"Layer (Level?)"}),"\n",(0,i.jsxs)(n.p,{children:['In Hermes, it is intuitive to define the "storage device distance" of a\nstorage device from an application or permanent storage port, and\nstorage devices can be ranked or sorted by their distance from such a\nport. By grouping together storage devices of the same or similar\ndistance from a given port, one can identify ',(0,i.jsx)(n.em,{children:"layers"})," or ",(0,i.jsx)(n.em,{children:"levels."}),' The\ndistance is defined relative to a port: The storage world "looks"\ndifferent from different ports, i.e., the same storage device will\ngenerally have different distances from different ports. Since some of\nthe storage device characteristics which enter into the storage device\ndistance are time-dependent, the corrsponding layer structure is\ntime-dependent as well!']})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9391:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Ares_simplified_structure-138c68b13ac25cf2b2a1362901083bcc.png"},26:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Chameleon_Hardware_Summary-005b894eae2701e8cfd0939325068578.png"},2252:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Network_topology-d94e9a0ff17e966a7b09ccda04a06c7d.png"},4864:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/RDMA_bandwidth-4eab72d930c7b07f186f971fd24a2742.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var i=s(7294);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);