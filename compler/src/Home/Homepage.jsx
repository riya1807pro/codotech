import React from 'react'
import './HomeStyle.scss'

function Homepage() {
  
  return (
    <div className='homeContainer'> 
      <div className='leftbar'>
        <div className='logo'>
            <img src = 'Logo.png' alt='logo' />
        </div>
        <span className='heading'>Compiler</span>
        <span className='discription'>Code.Compile.Debug</span>
        <button>
            <span class="material-symbols-outlined">
                add
                </span>
            Create New Playground</button>
      </div>
      <div className='rightbar'>
        <div className='header'>
          <h1>My<span className='bolder'>Playground</span></h1>
          <button className='new'>
            <span class="material-symbols-outlined">add</span>
            New folder
          </button>
        </div>
        <div className="folder">
          <div className='header'>
            <div className='folderName'>
              <span class="material-symbols-outlined">
                folder
                </span>
              <h2>{`DSA`}</h2>
            </div>
            <div className='folderOption'>
           
              <button>
                <span class="material-symbols-outlined">
                  arrow_back
                  </span>
                New playground </button>
                <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
            </div>
          </div>
       
        </div>
        <div className="card-container">
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
          </div>



          <div className="folder">
          <div className='header'>
            <div className='folderName'>
              <span class="material-symbols-outlined">
                folder
                </span>
              <h2>{`DSA`}</h2>
            </div>
            <div className='folderOption'>
           
              <button>
                <span class="material-symbols-outlined">
                  arrow_back
                  </span>
                New playground </button>
                <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
            </div>
          </div>
       
        </div>
        <div className="card-container">
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
            <div className="card">
              <span className="logo">
              <img src = 'Logo.png' alt='logo' />
              </span>
             <div className="cardName">
             <span>{`Heap Impletation`}</span>
             <span>Language:{`Java`}</span>
             </div>
             <div className="cardOption">
             <span class="material-symbols-outlined">
                delete
                </span><span class="material-symbols-outlined">
                  edit
                  </span>
             </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Homepage
