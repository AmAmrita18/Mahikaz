import React from 'react'
import infoBG from "/footerBG.png";

const Description = () => {
  return (
    <div className='w-full'
    style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
        <div className='w-[80%] h-full mx-auto max-w-[1200px] '>
        <div className="w-[60%] bg-white rounded-xl ">
            <div className="flex justify-between px-6 py-6 border-b border-[#E4E4E4]">
              <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">Description</h1>
            </div>
            <div className="flex flex-col px-6 py-6 gap-3 ">
              <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                ut ipsi auctori huius disciplinae placet: constituam, quid sit
                numeranda nec me ab illo inventore veritatis et expedita
                distinctio nam libero tempore, cum memoriter, tum etiam ac
                ratione.
              </p>
              <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                Si sine metu degendae praesidia firmissima filium morte multavit
                si sine causa? quae fuerit causa, mox videro; interea hoc
                tenebo, si ob rem voluptas assumenda est, quid sit extremum et
                inter mediocrem animadversionem atque natum sit, a natura
                incorrupte.
              </p>
              <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                Omne animal, simul atque in sanguinem suum tam inportuno tamque
                crudeli; sin, ut earum motus et accusamus et argumentandum et
                dolore suo sanciret militaris imperii disciplinam exercitumque
                in liberos atque haec ratio late patet in quo pertineant non
                possim.
              </p>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Description