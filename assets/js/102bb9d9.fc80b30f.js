"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9076],{5535:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=s(5893),r=s(1151);const i={},t="DeepDriveMD",d={id:"jarvis/jarvis-cd/packages/deepdrivemd",title:"DeepDriveMD",description:"Dependencies",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/deepdrivemd.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/deepdrivemd",permalink:"/docs/jarvis/jarvis-cd/packages/deepdrivemd",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CM1",permalink:"/docs/jarvis/jarvis-cd/packages/cm1"},next:{title:"Gadget2",permalink:"/docs/jarvis/jarvis-cd/packages/gadget2"}},l={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Prepare Conda Environment from Config Files",id:"prepare-conda-environment-from-config-files",level:3},{value:"Prepare Conda",id:"prepare-conda",level:4},{value:"First git clone this repo and save it to <code>$DDMD_PATH</code>",id:"first-git-clone-this-repo-and-save-it-to-ddmd_path",level:4},{value:"Create the two conda environments",id:"create-the-two-conda-environments",level:4},{value:"Update python packages in both conda environments",id:"update-python-packages-in-both-conda-environments",level:4},{value:"Hermes Dependencies",id:"hermes-dependencies",level:2},{value:"In Ares",id:"in-ares",level:3},{value:"Personal Machine",id:"personal-machine",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Stage 1 : OPENMM",id:"stage-1--openmm",level:3},{value:"Environment variables note",id:"environment-variables-note",level:4},{value:"Stage 2 : AGGREGATE",id:"stage-2--aggregate",level:3},{value:"Stage 3 : TRAINING",id:"stage-3--training",level:3},{value:"Stage 4 : INFERENCE",id:"stage-4--inference",level:3}];function o(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"deepdrivemd",children:"DeepDriveMD"}),"\n",(0,a.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"You can setup environments two ways"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#ddmd-conda-environment-from-config-files",children:"create environment from config files"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/candiceT233/deepdrivemd_pnnl/blob/main/docs/conda_env/README.md",children:"buid the conda environment from scratch"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"prepare-conda-environment-from-config-files",children:"Prepare Conda Environment from Config Files"}),"\n",(0,a.jsx)(n.h4,{id:"prepare-conda",children:"Prepare Conda"}),"\n",(0,a.jsxs)(n.p,{children:["Get the ",(0,a.jsx)(n.code,{children:"miniconda3"})," installation script and run it"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh\nbash Miniconda3-latest-Linux-x86_64.sh.sh\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The current conda version tested work that works ",(0,a.jsx)(n.code,{children:"conda 23.3.1"}),"."]}),"\n",(0,a.jsxs)(n.h4,{id:"first-git-clone-this-repo-and-save-it-to-ddmd_path",children:["First git clone this repo and save it to ",(0,a.jsx)(n.code,{children:"$DDMD_PATH"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"export CONDA_OPENMM=openmm7_ddmd\nexport CONDA_PYTORCH=ddmd_pytorch\nexport DDMD_PATH=${PWD}/deepdrivemd\nexport MOLECULES_PATH=$DDMD_PATH/submodules/molecules\ngit clone --recursive https://github.com/candiceT233/deepdrivemd_pnnl.git $DDMD_PATH\ncd $DDMD_PATH\n"})}),"\n",(0,a.jsx)(n.h4,{id:"create-the-two-conda-environments",children:"Create the two conda environments"}),"\n",(0,a.jsxs)(n.p,{children:["Name your two environment names ",(0,a.jsx)(n.code,{children:"$CONDA_OPENMM"})," ",(0,a.jsx)(n.code,{children:"$CONDA_PYTORCH"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cd $DDMD_PATH\nconda env create -f ${DDMD_PATH}/docs/conda_env/ddmd_openmm7.yaml --name=${CONDA_OPENMM}\nconda env create -f ${DDMD_PATH}/docs/conda_env/ddmd_pytorch.yaml --name=${CONDA_PYTORCH}\n"})}),"\n",(0,a.jsx)(n.p,{children:"If mdtools fails to install, that's ok. It will be handled in step 4."}),"\n",(0,a.jsx)(n.h4,{id:"update-python-packages-in-both-conda-environments",children:"Update python packages in both conda environments"}),"\n",(0,a.jsx)(n.p,{children:"Update CONDA_OPENMM"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"source activate $CONDA_OPENMM\ncd $DDMD_PATH/submodules/MD-tools\npip install .\ncd $DDMD_PATH/submodules/molecules\npip install .\nconda deactivate\n"})}),"\n",(0,a.jsx)(n.p,{children:"Update CONDA_PYTORCH"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"source activate $CONDA_PYTORCH\ncd $DDMD_PATH/submodules/MD-tools\npip install .\ncd $DDMD_PATH/submodules/molecules\npip install .\nconda deactivate\n"})}),"\n",(0,a.jsx)(n.h2,{id:"hermes-dependencies",children:"Hermes Dependencies"}),"\n",(0,a.jsx)(n.h3,{id:"in-ares",children:"In Ares"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"module load hermes/pnnl-tz3s7yx\n"})}),"\n",(0,a.jsx)(n.p,{children:"this automatically loads the Hermes build with VFD, and it's HDF5 dependency."}),"\n",(0,a.jsx)(n.h3,{id:"personal-machine",children:"Personal Machine"}),"\n",(0,a.jsx)(n.p,{children:"If building Hermes yourself:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Sequential HDF5 >= 1.14.0"}),"\n",(0,a.jsx)(n.li,{children:"Hermes>=1.0 with VFD and POSIX Adaptor support"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Build HDF5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"scspkg create hdf5\ncd `scspkg pkg src hdf5`\ngit clone https://github.com/HDFGroup/hdf5.git -b hdf5_1_14_0\ncd hdf5\nmkdir build\ncd build\ncmake ../ -DHDF5_BUILD_HL_LIB=ON -DCMAKE_INSTALL_PREFIX=`scspkg pkg root hdf5`\nmake -j8\nmake install\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install Hermes with Custom HDF5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spack install mochi-thallium~cereal@0.10.1 cereal catch2@3.0.1 mpich@3.3.2 yaml-cpp boost@1.7\nspack load mochi-thallium~cereal@0.10.1 cereal catch2@3.0.1 mpich@3.3.2 yaml-cpp boost@1.7\nmodule load hdf5\n"})}),"\n",(0,a.jsx)(n.p,{children:"NOTE: this only needs to be done for the CONDA_OPENMM environment, since both environment use the same exact python version. HDF5 will be compiled the same. However, these commands must be executed before source active $CONDA_PYTORCH to avoid overriding the python version."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"h5py==3.8.0"})," is required for ",(0,a.jsx)(n.code,{children:"hdf5-1.14.0"})," and ",(0,a.jsx)(n.code,{children:"Hermes>=1.0"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pip install h5py==3.8.0"})," should be run after deepdrivemd installation due to version restriction with pip"]}),"\n",(0,a.jsxs)(n.li,{children:["makesure you have ",(0,a.jsx)(n.code,{children:"hdf5-1.14.0"})," installed and added to $PATH before installing h5py (otherwise it will download hdf5-1.12.0 by default)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"module load hdf5\n\ncd $DDMD_PATH\nsource activate $CONDA_OPENMM\npip install -e .\npip uninstall h5py; pip install h5py==3.8.0\nconda deactivate\n\nsource activate $CONDA_PYTORCH\npip install -e .\npip uninstall h5py; pip install h5py==3.8.0\nconda deactivate\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Below describes running one iteration of the 4-stages pipeline. ",(0,a.jsx)(n.br,{}),"\n","Set up experiment path in ",(0,a.jsx)(n.code,{children:"$EXPERIMENT_PATH"}),", this will store all output files and log files from all stages."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"EXPERIMENT_PATH=~/ddmd_runs\nmkdir -p $EXPERIMENT_PATH\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stage-1--openmm",children:"Stage 1 : OPENMM"}),"\n",(0,a.jsx)(n.p,{children:"Run code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source activate $CONDA_OPENMM\n\nPYTHONPATH=$DDMD_PATH:$MOLECULES_PATH python $DDMD_PATH/deepdrivemd/sim/openmm/run_openmm.py -c $YAML_PATH/molecular_dynamics_stage_test.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This stage runs simulation, minimally you have to run 12 simulation tasks for stage 3 & 4 to work. So you must run the above command at least 12 times and each time with a different ",(0,a.jsx)(n.code,{children:"TASK_IDX_FORMAT"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"environment-variables-note",children:"Environment variables note"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"TASK_IDX_FORMAT"})," : give a different task ID format for each openmm task, starts with ",(0,a.jsx)(n.code,{children:"task0000"})," up to ",(0,a.jsx)(n.code,{children:"task0011"})," for 12 tasks."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SIM_LENGTH"})," : The simulation size, must be at least ",(0,a.jsx)(n.code,{children:"0.1"})," for stage 3 & 4 to work."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GPU_IDX"})," : set it to 0 since GPU is not used"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"YAML_PATH"})," : The yaml file that contains the test configuration for the first stage"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Setup environment variables and paths"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'SIM_LENGTH=0.1\nGPU_IDX=0\nTASK_IDX_FORMAT="task0000"\nSTAGE_IDX=0\nOUTPUT_PATH=$EXPERIMENT_PATH/molecular_dynamics_runs/stage0000/$TASK_IDX_FORMAT\nYAML_PATH=$DDMD_PATH/test/bba\nmkdir -p $OUTPUT_PATH\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In the yaml file ",(0,a.jsx)(n.a,{href:"https://github.com/candiceT233/deepdrivemd_pnnl/blob/main/test/bba/molecular_dynamics_stage_test.yaml",children:(0,a.jsx)(n.code,{children:"molecular_dynamics_stage_test.yaml"})}),", makesure to modify the following fields accordingly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"nano ${DDMD_PATH}/test/bba/molecular_dynamics_stage_test.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"experiment_directory: $EXPERIMENT_PATH\nstage_idx: $STAGE_IDX\noutput_path: $OUTPUT_PATH\npdb_file: $DDMD_PATH/data/bba/system/1FME-unfolded.pdb\ninitial_pdb_dir: $DDMD_PATH/data/bba\nsimulation_length_ns: $SIM_LENGTH\nreference_pdb_file: $DDMD_PATH/data/bba/1FME-folded.pdb\ngpu_idx: $GPU_IDX\n"})}),"\n",(0,a.jsx)(n.p,{children:"Sample output under one task folder (total 12 tasks folders):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"ls -l $OUTPUT_PATH\n-rw-rw-r-- 1 username username  722 Aug 11 01:08 aggregate_stage_test.yaml\n-rw-rw-r-- 1 username username  786 Aug 10 21:50 molecular_dynamics_stage_test.yaml\n-rw-rw-r-- 1 username username 599K Aug 10 21:56 stage0000_task0000.dcd\n-rw-rw-r-- 1 username username 164K Aug 10 21:56 stage0000_task0000.h5\n-rw-rw-r-- 1 username username  39K Aug 10 21:50 system__1FME-unfolded.pdb\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stage-2--aggregate",children:"Stage 2 : AGGREGATE"}),"\n",(0,a.jsx)(n.p,{children:"Run code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source activate $CONDA_OPENMM\n\nPYTHONPATH=$DDMD_PATH/ python $DDMD_PATH/deepdrivemd/aggregation/basic/aggregate.py -c $YAML_PATH/aggregate_stage_test.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This stage only need to be run one time, it aggregates all the ",(0,a.jsx)(n.code,{children:"stage0000_task0000.h5"})," files from simulation into a single ",(0,a.jsx)(n.code,{children:"aggregated.h5"})," file."]}),"\n",(0,a.jsx)(n.p,{children:"Setup a different output path to the first openmm task folder:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"OUTPUT_PATH=$EXPERIMENT_PATH/machine_learning_runs/stage0000/task0000\n\nmkdir -p $OUTPUT_PATH\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the yaml file ",(0,a.jsx)(n.a,{href:"https://github.com/candiceT233/deepdrivemd_pnnl/blob/main/test/bba/aggregate_stage_test.yaml",children:(0,a.jsx)(n.code,{children:"aggregate_stage_test.yaml"})}),", makesure to modify the following fields accordingly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"experiment_directory: $EXPERIMENT_PATH\nstage_idx: $STAGE_IDX\npdb_file: $DDMD_PATH/data/bba/system/1FME-unfolded.pdb\nreference_pdb_file: $DDMD_PATH/data/bba/1FME-folded.pdb\n"})}),"\n",(0,a.jsx)(n.p,{children:"Expected output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"ls -l $OUTPUT_PATH | grep aggregated\n-rw-rw-r-- 1 username username 1.6M Aug 11 01:08 aggregated.h5\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stage-3--training",children:"Stage 3 : TRAINING"}),"\n",(0,a.jsx)(n.p,{children:"Run code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source activate $CONDA_PYTORCH\n\nPYTHONPATH=$DDMD_PATH/:$MOLECULES_PATH python $DDMD_PATH/deepdrivemd/models/aae/train.py -c $YAML_PATH/training_stage_test.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"When the code run, python might show warning messages that can be ignored."}),"\n",(0,a.jsx)(n.p,{children:"Setup a different output path:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"OUTPUT_PATH=$EXPERIMENT_PATH/machine_learning_runs/stage000$STAGE_IDX/$TASK_IDX_FORMAT\n\nmkdir -p $OUTPUT_PATH\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the yaml file ",(0,a.jsx)(n.a,{href:"https://github.com/candiceT233/deepdrivemd_pnnl/blob/main/test/bba/training_stage_test.yaml",children:(0,a.jsx)(n.code,{children:"training_stage_test.yaml"})}),", makesure to modify the following fields accordingly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"experiment_directory: $EXPERIMENT_PATH\noutput_path: $OUTPUT_PATH\n"})}),"\n",(0,a.jsx)(n.p,{children:"Expected output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"ls -l $OUTPUT_PATH\ndrwxrwxr-x 2 username username 4.0K Aug 11 01:09 checkpoint\n-rw-rw-r-- 1 username username 1.5M Aug 11 01:10 discriminator-weights.pt\ndrwxrwxr-x 2 username username 4.0K Aug 11 01:10 embeddings\n-rw-rw-r-- 1 username username 2.0M Aug 11 01:10 encoder-weights.pt\n-rw-rw-r-- 1 username username 2.7M Aug 11 01:10 generator-weights.pt\n-rw-rw-r-- 1 username username 1.2K Aug 11 01:10 loss.json\n-rw-rw-r-- 1 username username  495 Aug 11 01:08 model-hparams.json\n-rw-rw-r-- 1 username username   82 Aug 11 01:08 optimizer-hparams.json\n-rw-rw-r-- 1 username username  884 Aug 11 01:08 training_stage_test.yaml\n-rw-rw-r-- 1 username username 1.3K Aug 11 01:08 virtual-h5-metadata.json\n-rw-rw-r-- 1 username username  10K Aug 11 01:08 virtual_stage0000_task0000.h5\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"stage-4--inference",children:"Stage 4 : INFERENCE"}),"\n",(0,a.jsx)(n.p,{children:"Run code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source activate $CONDA_PYTORCH\n\nOMP_NUM_THREADS=4 PYTHONPATH=$DDMD_PATH/:$MOLECULES_PATH python $DDMD_PATH/deepdrivemd/agents/lof/lof.py -c $YAML_PATH/inference_stage_test.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"OMP_NUM_THREADS"})," can be changed."]}),"\n",(0,a.jsx)(n.p,{children:"Update environment variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"STAGE_IDX=3\n\nOUTPUT_PATH=$EXPERIMENT_PATH/inference_runs/stage0000/$TASK_IDX_FORMAT\n\nmkdir -p $OUTPUT_PATH\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the yaml file ",(0,a.jsx)(n.a,{href:"https://github.com/candiceT233/deepdrivemd_pnnl/blob/main/test/bba/inference_stage_test.yaml",children:(0,a.jsx)(n.code,{children:"inference_stage_test.yaml"})}),", makesure to modify the following fields accordingly:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"experiment_directory: $EXPERIMENT_PATH\nstage_idx: $STAGE_IDX\noutput_path: $OUTPUT_PATH\n"})}),"\n",(0,a.jsx)(n.p,{children:"Expected output files:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-log",children:"ls -l $OUTPUT_PATH\n-rw-rw-r-- 1 username username  479 Aug 11 01:10 inference_stage_test.yaml\n-rw-rw-r-- 1 username username 1.5K Aug 11 01:10 virtual-h5-metadata.json\n-rw-rw-r-- 1 username username  18K Aug 11 01:10 virtual_stage0003_task0000.h5\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var a=s(7294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);