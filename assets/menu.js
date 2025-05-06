let sz="";
sz+=`<nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/Kepek/del-korea.ico" alt="" style="width:40px; height:40px;" class="rounded-pill"> 
          </a>
          <a class="navbar-brand" href="/pages/Index.html">Dél-korea</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/pages/Etelek.html">Ételei</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/Tortenete.html">Története</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/Erdekessegei.html">Érdekességei</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link" href="#">Útvonalok</a>
              </li>    
            </ul>
          </div>
        </div>
      </nav>`
      document.getElementById("menu").innerHTML=sz;