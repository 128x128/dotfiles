 

"================================================================
"|  PLUGINS                                                    | 
"================================================================
call plug#begin()

Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'luochen1990/rainbow'
Plug 'ggandor/lightspeed.nvim'
Plug 'preservim/nerdtree'
Plug 'preservim/nerdcommenter'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'ryanoasis/vim-devicons'
Plug 'sheerun/vim-polyglot'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'vim-syntastic/syntastic'
Plug 'ervandew/supertab'
Plug 'jdhao/better-escape.vim'
Plug 'easymotion/vim-easymotion'
Plug 'preservim/tagbar'
Plug 'ap/vim-css-color'
Plug 'sk1418/blockit'
Plug 'gyim/vim-boxdraw'
Plug 'puremourning/vimspector'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'tobi-wan-kenobi/zengarden'

call plug#end()
packloadall

"================================================================
"|  KEYBINDS                                                   | 
"================================================================

imap <c-f> <right>
imap <c-a> <left>

noremap l <up>
noremap k <down>
noremap j <left>
noremap ; <right>

noremap K o<space><esc>
noremap L O<space><esc>
noremap n %

map m <Plug>(easymotion-prefix)
map h <Plug>Sneak_;
map ' <Plug>Sneak_,

map <c-c> <plug>NERDCommenterComment  
map <c-v> <plug>NERDCommenterUncomment 

nmap <C-n> :NERDTreeToggle<CR> 
nmap <c-b> :TagbarToggle<CR>
nmap F <c-w>w
nmap M :bn<CR>
nmap N :bp<CR>
"inoremap <CR>{ {<CR>}<Esc>ko
"let g:better_escape_shortcut = ['kl', 'lk']
"let g:better_escape_interval = 200 
"================================================================
"|  SETTINGS                                                   | 
"================================================================

set guicursor=
set number
set ruler
set relativenumber
"set list
"set listchars=tab:>-,eol:¬,trail:.
set mouse=a
set encoding=UTF-8
let g:rainbow_active = 1
let g:sneak#label = 1
 
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:python_highlight_space_errors = 0
let g:airline_right_alt_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_left_sep = ''
let g:airline_right_sep = ''

set backspace=indent,eol,start " let backspace delete over lines "
set wildmenu "graphical auto complete menu "
set wrap " Line Wrap "

set autoindent
set smartindent
set shiftwidth=4
set clipboard=unnamedplus
set clipboard=unnamed 
set scrolloff=20
filetype plugin on
 
set termguicolors
colorscheme zengarden 
let g:airline_theme='transparent'
hi Normal ctermbg=16 guibg=#000000
hi LineNr ctermbg=16 guibg=#000000
hi SignColumn guibg=#000000
hi MyTabSpace guifg=#000000
match MyTabSpace /\t\| /
map <c-g> :FZF<CR>
map <c-f> <Nop>

"set cursorline
"autocmd InsertEnter * highlight CursorLine guibg=#111111 ctermbg=grey
"autocmd InsertLeave * highlight CursorLine guifg=NONE guibg=#111111 ctermfg=None ctermbg=None
 
 
 
hi CursorLineNR guibg=#000000 
 
"================================================================
"|  COC SETTINGS                                               | 
"================================================================

let g:coc_node_path = '/usr/local/bin/node'
let g:coc_global_extensions = ['coc-snippets', 'coc-json', 'coc-git', 'coc-html', 'coc-css', 'coc-tsserver','coc-eslint', 'coc-prettier', 'coc-cmake']

inoremap <silent><expr> <TAB>
      \ pumvisible() ? coc#_select_confirm() :
      \ coc#expandableOrJumpable() ? "\<C-r>=coc#rpc#request('doKeymap', ['snippets-expand-jump',''])\<CR>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

imap <C-j> <Plug>(coc-snippets-expand)
command! -nargs=0 Snip :CocCommand snippets.editSnippets
command! -nargs=0 P :CocCommand prettier.formatFile

"================================================================
"|  VISUAL BLOCKS                                              | 
"================================================================

let g:blockit_fixed_length=80
let g:blockit_V_char='| '
let g:blockit_H_char='='
vmap Z <Plug>BlockitVisual
vmap X +o
vmap C +O


ino <C-A> <C-O>yiW<End>=<C-R>=<C-R>0<CR>
"================================================================
"|  let g:vimspector_enable_mappings = 'HUMAN'                 | 
"|  nnoremap <leader>dd :call vimspector#Launch()<CR>          | 
"|  nnoremap <leader>ds :call vimspector#Reset()<CR>           | 
"================================================================

