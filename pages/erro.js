
export default function erro() {
  return (
      <div 
          style={{
              display:"flex", 
              alignItems:"center",
              justifyContent:"center", 
              flexDirection:"column",
          }}
      >
          <>
              <img 
                  src="url(/erro.png)"
                  width={256}
                  height={256}
              />
              <h2 style={{fontSize:32}}>Pressione para ir a HomePage.</h2>
          </>

          
      </div>
  )
}