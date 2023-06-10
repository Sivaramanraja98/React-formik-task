import React, { useContext } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import MyContext from '../../MyContext';

const ListBook = () => {
    let {books, deletebook, editbook } = useContext(MyContext);
    return (
        <div className="container">
        <Header heading ="VIEW BOOK LIST"/>
        <Link to ="/add">
        <button className='addbtn'>ADD BOOK</button>
        </Link>
        <table className='table table-dark table-hover .table-responsive'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.length > 0 ? (
                    books.map(book => {
                        const {id, title, author} = book;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>
                                    <button className ="btn btn-danger" onClick={() => deletebook(id)}>Delete</button>
                                    <Link to = "/edit">
                                    <button className ="btn btn-primary" onClick={() => editbook(id, book)}>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No books found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
        </div>
    )
}

export default ListBook;