function NoteItem({ id, title, content, onDelete, onEdit}) {
  const handleDelete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?")
    if(konfirm){
      onDelete(id)
      alert("Berhasil delete")
    }
  }
  return (
    // <h1>Hallo</h1>
    // <div className="flex">
      <div >
        <div className="note bg-[#FFFFEC] m-5 rounded w-[340px] h-auto p-4  relative">
          <button onClick={() => handleDelete(id)} className='detele absolute right-4 font-bold text-2xl top-1 text-red-500'>x</button>
          <div className="text-lg text-black font-bold"> {title}</div>
          <p className="text-black text-serif">{content}</p>
          <button className="text-white bg-slate-500 px-3 py-1 inline-block mt-5 rounded shadow hover:bg-slate-700 " onClick={() => onEdit(id)}>Edit</button>
        </div>
      </div>
    // </div>
  )
}
export default NoteItem;