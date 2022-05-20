type ContainerProps={
    styles:React.CSSProperties,
    children:React.ReactNode
}
export const Container=({styles,children}:ContainerProps)=>{
    return(
        <div style={styles}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi eaque iusto sed voluptatum culpa corporis maxime quae ab tempore. Saepe quae temporibus reiciendis. Dignissimos expedita ullam hic, quod cum dicta commodi vel quo nemo enim esse. Maxime cupiditate nulla expedita vitae neque nesciunt distinctio earum, ea explicabo impedit voluptas, veritatis harum eveniet repellat, veniam placeat optio est ex praesentium nobis. Rem dolore nisi enim officia? Provident dolores sunt saepe facilis molestias, autem nostrum sapiente. Aut ea commodi quaerat natus quisquam dolores enim hic facere ipsam fugit vel blanditiis delectus autem placeat totam pariatur maxime architecto quo neque laboriosam quam iusto, eligendi nihil cum. Saepe deleniti quod quasi veritatis et odio quas, animi odit doloremque! In, error aliquam! Odit, asperiores assumenda? Quo voluptatum fugiat modi corporis animi suscipit, tempora quam magni? Repellat earum, minima maxime expedita omnis suscipit, repellendus dignissimos eligendi, distinctio amet saepe. Quisquam esse delectus consequuntur iusto cum provident tenetur at sunt unde atque tempore sed, asperiores quod. Iusto debitis nisi nam eos adipisci obcaecati provident! Neque soluta officia laboriosam accusamus natus, id velit! Obcaecati corrupti vitae architecto ex repellat, recusandae dolores ratione sed in minima quae fugiat illum provident aliquid quidem dicta. Rem cum qui numquam ipsam?</p>
            {children}
        </div>
    )
}