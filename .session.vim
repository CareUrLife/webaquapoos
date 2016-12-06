let SessionLoad = 1
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
inoremap <expr> <Down> pumvisible() ? "\" : "\<Down>"
inoremap <expr> <Up> pumvisible() ? "\" : "\<Up>"
imap <Nul> <C-Space>
inoremap <C-Space> 
map! <S-Insert> <MiddleMouse>
inoremap <expr> <S-Tab> pumvisible() ? "\" : "\<S-Tab>"
inoremap <silent> <Plug>snipMateShow =snipMate#ShowAvailableSnips()
inoremap <silent> <Plug>snipMateBack =snipMate#BackwardsSnippet()
inoremap <silent> <Plug>snipMateTrigger =snipMate#TriggerSnippet(1)
inoremap <silent> <Plug>snipMateNextOrTrigger =snipMate#TriggerSnippet()
inoremap <silent> <Plug>IMAP_JumpBack =IMAP_Jumpfunc('b', 0)
inoremap <silent> <Plug>IMAP_JumpForward =IMAP_Jumpfunc('', 0)
inoremap <Plug>(emmet-anchorize-summary) =emmet#util#closePopup()=emmet#anchorizeURL(1)
inoremap <Plug>(emmet-anchorize-url) =emmet#util#closePopup()=emmet#anchorizeURL(0)
inoremap <Plug>(emmet-remove-tag) =emmet#util#closePopup()=emmet#removeTag()
inoremap <Plug>(emmet-split-join-tag) :call emmet#splitJoinTag()
inoremap <Plug>(emmet-toggle-comment) =emmet#util#closePopup()=emmet#toggleComment()
inoremap <Plug>(emmet-image-size) =emmet#util#closePopup()=emmet#imageSize()
inoremap <Plug>(emmet-move-prev-item) :call emmet#moveNextPrevItem(1)
inoremap <Plug>(emmet-move-next-item) :call emmet#moveNextPrevItem(0)
inoremap <Plug>(emmet-move-prev) :call emmet#moveNextPrev(1)
inoremap <Plug>(emmet-move-next) :call emmet#moveNextPrev(0)
inoremap <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-1)
inoremap <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(1)
inoremap <Plug>(emmet-update-tag) =emmet#util#closePopup()=emmet#updateTag()
inoremap <Plug>(emmet-expand-word) =emmet#util#closePopup()=emmet#expandAbbr(1,"")
inoremap <Plug>(emmet-expand-abbr) =emmet#util#closePopup()=emmet#expandAbbr(0,"")
inoremap <silent> <expr> <Plug>delimitMateS-BS delimitMate#WithinEmptyPair() ? "\<Del>" : "\<S-BS>"
inoremap <silent> <Plug>delimitMateBS =delimitMate#BS()
map  ggVG
map  :NERDTreeTabsToggle:NERDTreeMirrorOpen
nnoremap  
vmap  h
omap  h
xmap 	 <Plug>snipMateVisual
smap 	 <Plug>snipMateNextOrTrigger
nnoremap <NL> <NL>
smap <NL> <Plug>snipMateNextOrTrigger
xmap <NL> j
omap <NL> j
nnoremap  
vmap  k
omap  k
nnoremap  
vmap  l
omap  l
vmap c <Plug>(emmet-code-pretty)
vmap m <Plug>(emmet-merge-lines)
nmap A <Plug>(emmet-anchorize-summary)
nmap a <Plug>(emmet-anchorize-url)
nmap k <Plug>(emmet-remove-tag)
nmap j <Plug>(emmet-split-join-tag)
nmap / <Plug>(emmet-toggle-comment)
nmap i <Plug>(emmet-image-size)
nmap N <Plug>(emmet-move-prev)
nmap n <Plug>(emmet-move-next)
vmap D <Plug>(emmet-balance-tag-outword)
nmap D <Plug>(emmet-balance-tag-outword)
vmap d <Plug>(emmet-balance-tag-inward)
nmap d <Plug>(emmet-balance-tag-inward)
nmap u <Plug>(emmet-update-tag)
nmap ; <Plug>(emmet-expand-word)
vmap , <Plug>(emmet-expand-abbr)
nmap , <Plug>(emmet-expand-abbr)
map   /
vnoremap <silent> # :call VisualSelection('b')
vnoremap <silent> * :call VisualSelection('f')
nnoremap ,d :YcmShowDetailedDiagnostic
nmap ,nt :NERDTreeFind
map ,e :NERDTreeFind
map ,pp :setlocal paste!
map ,q :e ~/buffer
noremap ,m mmHmt:%s///ge'tzt'm
map ,s? z=
map ,sa zg
map ,sp [s
map ,sn ]s
map ,ss :setlocal spell!
map ,p :cp
map ,n <Plug>NERDTreeTabsToggle
map ,co ggVGy:tabnew:set syntax=qfpgg
map ,cc :botright cope
vnoremap <silent> ,r :call VisualSelection('replace')
map ,  :vimgrep // %<Right><Right><Right><Right><Right><Right><Right><Right><Right>
map ,g :vimgrep // **/*.<Left><Left><Left><Left><Left><Left><Left>
map ,cd :cd %:p:h:pwd
map ,te :tabedit =expand("%:p:h")/
map ,tm :tabmove
map ,tc :tabclose
map ,to :tabonly
map ,tn :tabnew
map ,ba :1,1000 bd!
map ,bd :Bclose
map <silent> , :noh
nmap ,w :w!
map 0 ^
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
vnoremap <silent> gv :call VisualSelection('gv')
map j gj
map k gk
nnoremap <SNR>25_: :=v:count ? v:count : ''
noremap <silent> <Plug>AirlineSelectTab1 :1tabn
noremap <silent> <Plug>AirlineSelectTab2 :2tabn
noremap <silent> <Plug>AirlineSelectTab3 :3tabn
noremap <silent> <Plug>AirlineSelectTab4 :4tabn
noremap <silent> <Plug>AirlineSelectTab5 :5tabn
noremap <silent> <Plug>AirlineSelectTab6 :6tabn
noremap <silent> <Plug>AirlineSelectTab7 :7tabn
noremap <silent> <Plug>AirlineSelectTab8 :8tabn
noremap <silent> <Plug>AirlineSelectTab9 :9tabn
noremap <silent> <Plug>AirlineSelectPrevTab gT
noremap <silent> <Plug>AirlineSelectNextTab :exe repeat(':tabn|', v:count1)
map <S-Insert> <MiddleMouse>
smap <S-Tab> <Plug>snipMateBack
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nnoremap <silent> <Plug>(vimshell_create) :VimShellCreate
nnoremap <silent> <Plug>(vimshell_switch) :VimShell
snoremap <silent> <Plug>snipMateBack a=snipMate#BackwardsSnippet()
snoremap <silent> <Plug>snipMateNextOrTrigger a=snipMate#TriggerSnippet()
vnoremap <silent> <Plug>IMAP_JumpBack `<i=IMAP_Jumpfunc('b', 0)
vnoremap <silent> <Plug>IMAP_JumpForward i=IMAP_Jumpfunc('', 0)
vnoremap <silent> <Plug>IMAP_DeleteAndJumpBack "_<Del>i=IMAP_Jumpfunc('b', 0)
vnoremap <silent> <Plug>IMAP_DeleteAndJumpForward "_<Del>i=IMAP_Jumpfunc('', 0)
nnoremap <silent> <Plug>IMAP_JumpBack i=IMAP_Jumpfunc('b', 0)
nnoremap <silent> <Plug>IMAP_JumpForward i=IMAP_Jumpfunc('', 0)
vnoremap <Plug>(emmet-code-pretty) :call emmet#codePretty()
vnoremap <Plug>(emmet-merge-lines) :call emmet#mergeLines()
nnoremap <Plug>(emmet-anchorize-summary) :call emmet#anchorizeURL(1)
nnoremap <Plug>(emmet-anchorize-url) :call emmet#anchorizeURL(0)
nnoremap <Plug>(emmet-remove-tag) :call emmet#removeTag()
nnoremap <Plug>(emmet-split-join-tag) :call emmet#splitJoinTag()
nnoremap <Plug>(emmet-toggle-comment) :call emmet#toggleComment()
nnoremap <Plug>(emmet-image-size) :call emmet#imageSize()
nnoremap <Plug>(emmet-move-prev-item) :call emmet#moveNextPrevItem(1)
nnoremap <Plug>(emmet-move-next-item) :call emmet#moveNextPrevItem(0)
nnoremap <Plug>(emmet-move-prev) :call emmet#moveNextPrev(1)
nnoremap <Plug>(emmet-move-next) :call emmet#moveNextPrev(0)
vnoremap <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-2)
nnoremap <Plug>(emmet-balance-tag-outword) :call emmet#balanceTag(-1)
vnoremap <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(2)
nnoremap <Plug>(emmet-balance-tag-inward) :call emmet#balanceTag(1)
nnoremap <Plug>(emmet-update-tag) :call emmet#updateTag()
nnoremap <Plug>(emmet-expand-word) :call emmet#expandAbbr(1,"")
vnoremap <Plug>(emmet-expand-abbr) :call emmet#expandAbbr(2,"")
nnoremap <Plug>(emmet-expand-abbr) :call emmet#expandAbbr(3,"")
nnoremap <SNR>26_: :=v:count ? v:count : ''
map <F3> :source ~/vim_session 
map <F2> :mksession! ~/vim_session 
map <C-Space> ?
inoremap <expr> 	 pumvisible() ? "\" : "\	"
imap <NL> a<Plug>snipMateNextOrTrigger
imap 	 <Plug>snipMateShow
imap A <Plug>(emmet-anchorize-summary)
imap a <Plug>(emmet-anchorize-url)
imap k <Plug>(emmet-remove-tag)
imap j <Plug>(emmet-split-join-tag)
imap / <Plug>(emmet-toggle-comment)
imap i <Plug>(emmet-image-size)
imap N <Plug>(emmet-move-prev)
imap n <Plug>(emmet-move-next)
imap D <Plug>(emmet-balance-tag-outword)
imap d <Plug>(emmet-balance-tag-inward)
imap u <Plug>(emmet-update-tag)
imap ; <Plug>(emmet-expand-word)
imap , <Plug>(emmet-expand-abbr)
vmap ë :m'<-2`>my`<mzgv`yo`z
vmap ê :m'>+`<my`>mzgv`yo`z
nmap ë mz:m-2`z
nmap ê mz:m+`z
let &cpo=s:cpo_save
unlet s:cpo_save
set autoindent
set autoread
set backspace=eol,start,indent
set cmdheight=2
set completefunc=youcompleteme#Complete
set completeopt=preview,menuone
set expandtab
set fileencodings=ucs-bom,utf-8,default,latin1
set fileformats=unix,dos,mac
set guifont=Inconsolata\ Bold\ 11.5
set guioptions=agimrLte
set guitablabel=%M\ %t
set helplang=en
set hidden
set history=700
set hlsearch
set ignorecase
set incsearch
set laststatus=2
set lazyredraw
set matchtime=2
set mouse=a
set omnifunc=youcompleteme#OmniComplete
set printoptions=paper:a4
set ruler
set runtimepath=~/.vim,~/.vim/bundle/Vundle.vim,~/.vim/bundle/vim-fugitive,~/.vim/bundle/syntastic,~/.vim/bundle/vim-colors-solarized,~/.vim/bundle/nerdtree,~/.vim/bundle/YouCompleteMe,~/.vim/bundle/clang_complete,~/.vim/bundle/vim-javascript,~/.vim/bundle/vim-javascript-syntax,~/.vim/bundle/delimitMate,~/.vim/bundle/gruvbox,~/.vim/bundle/emmet-vim,~/.vim/bundle/vim-airline,~/.vim/bundle/vim-airline-themes,~/.vim/bundle/vim-latex,~/.vim/bundle/vim-cpp-enhanced-highlight,~/.vim/bundle/vim-go,~/.vim/bundle/tern_for_vim,~/.vim/bundle/vim-snipmate,~/.vim/bundle/vim-addon-mw-utils,~/.vim/bundle/tlib_vim,~/.vim/bundle/vim-snippets,~/.vim/bundle/scss-syntax.vim,~/.vim/bundle/vim-css3-syntax,~/.vim/bundle/javascript-libraries-syntax.vim,~/.vim/bundle/yajs.vim,~/.vim/bundle/vim-json,~/.vim/bundle/vimshell.vim,~/.vim/bundle/vimproc,~/.vim/bundle/vim-autoformat,~/.vim/bundle/vim-jsx,~/.vim/bundle/MatchTag,~/.vim/bundle/tagbar,~/.vim/bundle/vim-python-pep8-indent,~/.vim/bundle/tabular,~/.vim/bundle/vim-markdown,/var/lib/vim/addons,/usr/share/vim/vimfiles,/usr/share/vim/vim74,/usr/share/vim/vimfiles/after,/var/lib/vim/addons/after,~/.vim/after,~/.vim/bundle/Vundle.vim,~/.vim/bundle/Vundle.vim/after,~/.vim/bundle/vim-fugitive/after,~/.vim/bundle/syntastic/after,~/.vim/bundle/vim-colors-solarized/after,~/.vim/bundle/nerdtree/after,~/.vim/bundle/YouCompleteMe/after,~/.vim/bundle/clang_complete/after,~/.vim/bundle/vim-javascript/after,~/.vim/bundle/vim-javascript-syntax/after,~/.vim/bundle/delimitMate/after,~/.vim/bundle/gruvbox/after,~/.vim/bundle/emmet-vim/after,~/.vim/bundle/vim-airline/after,~/.vim/bundle/vim-airline-themes/after,~/.vim/bundle/vim-latex/after,~/.vim/bundle/vim-cpp-enhanced-highlight/after,~/.vim/bundle/vim-go/after,~/.vim/bundle/tern_for_vim/after,~/.vim/bundle/vim-snipmate/after,~/.vim/bundle/vim-addon-mw-utils/after,~/.vim/bundle/tlib_vim/after,~/.vim/bundle/vim-snippets/after,~/.vim/bundle/scss-syntax.vim/after,~/.vim/bundle/vim-css3-syntax/after,~/.vim/bundle/javascript-libraries-syntax.vim/after,~/.vim/bundle/yajs.vim/after,~/.vim/bundle/vim-json/after,~/.vim/bundle/vimshell.vim/after,~/.vim/bundle/vimproc/after,~/.vim/bundle/vim-autoformat/after,~/.vim/bundle/vim-jsx/after,~/.vim/bundle/MatchTag/after,~/.vim/bundle/tagbar/after,~/.vim/bundle/vim-python-pep8-indent/after,~/.vim/bundle/tabular/after,~/.vim/bundle/vim-markdown/after
set scrolloff=7
set shiftwidth=4
set showmatch
set showtabline=2
set smartcase
set smartindent
set smarttab
set statusline=\ %{HasPaste()}%F%m%r%h\ %w\ \ CWD:\ %r%{getcwd()}%h\ \ \ Line:\ %l%#warningmsg#%{SyntasticStatuslineFlag()}%*
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc
set noswapfile
set switchbuf=useopen,usetab,newtab
set tabline=%!airline#extensions#tabline#get()
set tabstop=4
set termencoding=utf-8
set textwidth=500
set timeoutlen=500
set updatetime=2000
set viminfo=%,'100,<50,s10,h
set whichwrap=b,s,<,>,h,l
set wildignore=*.o,*~,*.pyc
set wildmenu
set window=43
set nowritebackup
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/CodeRespository/Project/CareUrLife/AquapoOs
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +534 ~/.vimrc
badd +1 /media/p77u4n/670d6842-a634-4c52-8fad-1f30415c5d3e/home/cloudatlas/.vimrc
badd +1 ~/Downloads/Karl\ T.\ Ulrich,\ \ Steven\ D.\ Eppinger-Product\ Design\ and\ Development-Mc\ Graw\ Hill\ (2012).pdf
badd +1 ~/Documents/Temp/bootstrap-3.3.7-dist/js/bootstrap.min.js
badd +1 ~/Documents/Temp/bootstrap-3.3.7-dist/js/bootstrap.js
badd +1 ~/.xprofile
badd +1 ~/Templates/test.txt
badd +1 ~/Desktop/Marshall\ B.\ Rosenberg-Nonviolent\ Communication_\ A\ Language\ of\ Life_\ Create\ Your\ Life,\ Your\ Relationships,\ and\ Your\ World\ in\ Harmony\ with\ Your\ Values\ (2003).pdf
badd +1 ~/Documents/Note/10\ days\ MBA/Day\ 1/essay_2.tex
badd +1 ~/workspace/SensorVisualization/test.txt
badd +1 ~/Documents/CodeRespository/WebApp/ReactPractice/client_lab/modules/FluxApp/BankAction.js
badd +1 /etc/apt/sources.list
badd +1 ~/Documents/CodeRespository/WebApp/ReactPractice/client_lab/modules/FluxApp/BankBalanceStore.js
badd +1 ~/Documents/CodeRespository/WebApp/ReactPractice/client_lab/modules/FluxApp/AppDispatcher.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/public/client/index/components/client.index.services.js
badd +1 ~/Documents/CodeRespository/WebApp/ReactPractice/client_lab/modules/FluxApp/FluxApp.js
badd +1 Documents/CodeRespository/Project/hack/scripts/env/live
badd +1 Documents/CodeRespository/Project/hack/scripts/env/jon
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/views/index.ejs
badd +26 ~/Documents/CodeRespository/Project/Visa/visa/app/controllers/customers.server.controller.js
badd +18 ~/Documents/CodeRespository/Project/Visa/visa/app/models/customers.server.model.js
badd +29 ~/Documents/CodeRespository/Project/Visa/visa/config/express.js
badd +10 ~/Documents/CodeRespository/Project/Visa/visa/config/mongoose.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/config/env/development.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/routes/customers.server.routes.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/routes/index.server.routes.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/server.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/controllers/session.server.controller.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/controllers/index.server.controller.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/config/config.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/config/env/production.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/routes/session.server.routes.js
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/public/index.html
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/scripts/hack
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/scripts/init.js
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/scripts/env/jon
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/scripts/env/live
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/src/index.js
badd +1 ~/Documents/CodeRespository/Project/Hack/p77u4n-hacker/bin/cli.js
badd +1 ~/Documents/CodeRespository/Project/Hack/hackUploader/package.json
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/package.json
badd +1 ~/Documents/CodeRespository/Project/Hack/hackUploader/ftp.js
badd +1 ~/Documents/CodeRespository/Project/Hack/hackUploader/upload.sh
badd +1 README.md
badd +27 package.json
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/node_modules/.bin/json5
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/node_modules/align-text/index.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/app/views/index.html
badd +36 App/Views/index.ejs
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/public/client/index/client.index.js
badd +14 Config/express.js
badd +1 Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/Module/index.nav.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/public/client/index/components/client.index.aboutme.js
badd +1 Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/Module/index.footer.js
badd +1 Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/Module/index.header.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/.babelrc
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/.bowerrc
badd +5 .babelrc
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/webpack.config.js
badd +15 webpack.config.js
badd +11 server.js
badd +1 ~/Documents/CodeRespository/WebApp/ReactPractice/client_lab/app.js
badd +1 server.config.js
badd +1 Config/config.js
badd +5 Config/Envs/development.js
badd +1 Config/Envs/production.js
badd +1 ~/Documents/CodeRespository/Project/Visa/visa/public/css/agency.min.css
badd +1 Client/.session.vim
badd +1 Client/Assets/Css/layout.css
badd +10 Client/Redux/Components/research.unitBedGrow.js
badd +13 Client/Redux/Components/Containers/research.container.garden.js
badd +16 Client/Redux/Components/Containers/research.container.bedGrow.js
badd +17 Client/Redux/Components/research.garden.js
badd +13 Client/master.js
badd +1 \'/home/p77u4n/Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/index.research.js\'
badd +19 Client/index.research.js
badd +1 \'/home/p77u4n/Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/index.home.js\'
badd +1 Client/index.home.js
badd +56 Client/Redux/Reducers/research.reducers.js
badd +30 Client/Redux/Components/research.bedGrow.js
badd +11 Client/Redux/Actions/research.actions.js
badd +1 Client/Redux/Components/research.veget.js
badd +1 Client/Redux/Components/research.detailStatus.js
badd +1 Client/Redux/Store/research.store.js
badd +26 Client/Assets/Css/research.layout.css
badd +1 Client/Redux/Components/index.productspec.js
badd +12 ~/Documents/CodeRespository/WebApp/MongoPractice/TransferTransaction.py
badd +14 ~/Documents/Note/Raw\ Notes/Note/Book/MongoDB-Design-Pattern/Sharding.md
badd +44 ~/Documents/Note/Raw\ Notes/Note/Book/MongoDB-Design-Pattern/MongoDB\ Aggregation\ Framework.md
badd +1 ~/Documents/Note/Raw\ Notes/Note/Book/MongoDB-Design-Pattern/Case\\\ Design:\\\ Pre-Aggregated\\\ Report.md
badd +75 ~/Documents/Note/Raw\ Notes/Note/Book/MongoDB-Design-Pattern/Case\ Design:\ Pre-Aggregated\ Report.md
badd +22 ~/Documents/Note/Raw\ Notes/Note/Book/MongDB-The-Definitive-Guide/MongoDB-Intro.md
badd +5 Config/mongoose.js
badd +13 App/Models/research.model.userAppData.js
badd +8 App/Routes/index.route.js
badd +2 App/Controllers/index.controller.js
badd +9 App/Controllers/index.database.controller.js
badd +21 App/Routes/index.api.route.js
badd +42 Client/Redux/Components/research.home.js
badd +76 Client/Redux/Components/index.navcustom.js
badd +13 Client/APIs/Auth.js
badd +13 Client/Redux/Components/research.login.js
argglobal
silent! argdel *
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
enew
file NERD_tree_1
let s:cpo_save=&cpo
set cpo&vim
imap <buffer> <S-BS> <Plug>delimitMateS-BS
imap <buffer> <BS> <Plug>delimitMateBS
nnoremap <buffer> <silent> <NL> :call nerdtree#ui_glue#invokeKeyMap("<C-j>")
nnoremap <buffer> <silent>  :call nerdtree#ui_glue#invokeKeyMap("<C-k>")
nnoremap <buffer> <silent>  :call nerdtree#ui_glue#invokeKeyMap(g:NERDTreeMapActivateNode)
nnoremap <buffer> <silent> ? :call nerdtree#ui_glue#invokeKeyMap("?")
nnoremap <buffer> <silent> A :call nerdtree#ui_glue#invokeKeyMap("A")
nnoremap <buffer> <silent> B :call nerdtree#ui_glue#invokeKeyMap("B")
nnoremap <buffer> <silent> CD :call nerdtree#ui_glue#invokeKeyMap("CD")
nnoremap <buffer> <silent> C :call nerdtree#ui_glue#invokeKeyMap("C")
nnoremap <buffer> <silent> D :call nerdtree#ui_glue#invokeKeyMap("D")
nnoremap <buffer> <silent> F :call nerdtree#ui_glue#invokeKeyMap("F")
nnoremap <buffer> <silent> I :call nerdtree#ui_glue#invokeKeyMap("I")
nnoremap <buffer> <silent> J :call nerdtree#ui_glue#invokeKeyMap("J")
nnoremap <buffer> <silent> K :call nerdtree#ui_glue#invokeKeyMap("K")
nnoremap <buffer> <silent> O :call nerdtree#ui_glue#invokeKeyMap("O")
nnoremap <buffer> <silent> P :call nerdtree#ui_glue#invokeKeyMap("P")
nnoremap <buffer> <silent> R :call nerdtree#ui_glue#invokeKeyMap("R")
nnoremap <buffer> <silent> T :call nerdtree#ui_glue#invokeKeyMap("T")
nnoremap <buffer> <silent> U :call nerdtree#ui_glue#invokeKeyMap("U")
nnoremap <buffer> <silent> X :call nerdtree#ui_glue#invokeKeyMap("X")
nnoremap <buffer> <silent> cd :call nerdtree#ui_glue#invokeKeyMap("cd")
nnoremap <buffer> <silent> e :call nerdtree#ui_glue#invokeKeyMap("e")
nnoremap <buffer> <silent> f :call nerdtree#ui_glue#invokeKeyMap("f")
nnoremap <buffer> <silent> gi :call nerdtree#ui_glue#invokeKeyMap("gi")
nnoremap <buffer> <silent> gs :call nerdtree#ui_glue#invokeKeyMap("gs")
nnoremap <buffer> <silent> go :call nerdtree#ui_glue#invokeKeyMap("go")
nnoremap <buffer> <silent> i :call nerdtree#ui_glue#invokeKeyMap("i")
nnoremap <buffer> <silent> m :call nerdtree#ui_glue#invokeKeyMap("m")
nnoremap <buffer> <silent> o :call nerdtree#ui_glue#invokeKeyMap("o")
nnoremap <buffer> <silent> p :call nerdtree#ui_glue#invokeKeyMap("p")
nnoremap <buffer> <silent> q :call nerdtree#ui_glue#invokeKeyMap("q")
nnoremap <buffer> <silent> r :call nerdtree#ui_glue#invokeKeyMap("r")
nnoremap <buffer> <silent> s :call nerdtree#ui_glue#invokeKeyMap("s")
nnoremap <buffer> <silent> t :call nerdtree#ui_glue#invokeKeyMap("t")
nnoremap <buffer> <silent> u :call nerdtree#ui_glue#invokeKeyMap("u")
nnoremap <buffer> <silent> x :call nerdtree#ui_glue#invokeKeyMap("x")
nnoremap <buffer> <silent> <2-LeftMouse> :call nerdtree#ui_glue#invokeKeyMap("<2-LeftMouse>")
nnoremap <buffer> <silent> <LeftRelease> <LeftRelease>:call nerdtree#ui_glue#invokeKeyMap("<LeftRelease>")
nnoremap <buffer> <silent> <MiddleRelease> :call nerdtree#ui_glue#invokeKeyMap("<MiddleRelease>")
imap <buffer> <silent> g <Plug>delimitMateJumpMany
imap <buffer>  <Plug>delimitMateBS
imap <buffer> " <Plug>delimitMate"
imap <buffer> ' <Plug>delimitMate'
imap <buffer> ( <Plug>delimitMate(
imap <buffer> ) <Plug>delimitMate)
imap <buffer> [ <Plug>delimitMate[
imap <buffer> ] <Plug>delimitMate]
imap <buffer> ` <Plug>delimitMate`
imap <buffer> { <Plug>delimitMate{
imap <buffer> } <Plug>delimitMate}
let &cpo=s:cpo_save
unlet s:cpo_save
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=hide
setlocal nobuflisted
setlocal buftype=nofile
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
set colorcolumn=80
setlocal colorcolumn=80
setlocal comments=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,fb:-
setlocal commentstring=/*%s*/
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=
setlocal conceallevel=0
setlocal completefunc=youcompleteme#Complete
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal cursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'nerdtree'
setlocal filetype=nerdtree
endif
setlocal fixendofline
setlocal foldcolumn=0
setlocal nofoldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=tcq
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
set linebreak
setlocal linebreak
setlocal nolisp
setlocal lispwords=
setlocal nolist
setlocal makeprg=
setlocal matchpairs=(:),{:},[:]
setlocal modeline
setlocal nomodifiable
setlocal nrformats=bin,octal,hex
set number
setlocal nonumber
setlocal numberwidth=4
setlocal omnifunc=youcompleteme#OmniComplete
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal signcolumn=auto
setlocal smartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=%!airline#statusline(1)
setlocal suffixesadd=
setlocal noswapfile
setlocal synmaxcol=3000
if &syntax != 'nerdtree'
setlocal syntax=nerdtree
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tags=
setlocal textwidth=500
setlocal thesaurus=
setlocal noundofile
setlocal undolevels=-123456
setlocal nowinfixheight
setlocal winfixwidth
setlocal nowrap
setlocal wrapmargin=0
tabnext 1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
