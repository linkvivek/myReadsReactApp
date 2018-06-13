import React from 'react'



class Search extends React.Component {

    state = {
        input : ''
      }    


      updateQuery = (value) => {
        this.setState(() => ({
          input :value
        })
      )}
    render() {

        const {input} = this.state
        const showingLists = this.state.query === ''? this.state.Books : 
        this.props.Books.filter((c) => (c.title.toLowerCase().includes(this.state.input.toLowerCase())
        // || c.authors.toLowerCase().includes(this.state.input.toLowerCase())
    ))

        console.log('here')
        console.log(this.props.Books)
    
        return (

            <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author" value={this.state.input}
              onChange = {(e) => this.updateQuery(e.target.value)} ></input>

            <ul class="list-group">
            {showingLists.map((b) => (
              <li class="list-group-item">{b.title}</li>
            ))}
            </ul>

          </div>
        
        )
    }
    }


    export default Search