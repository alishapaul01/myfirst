import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate= new Date();
    const expenseTitle= 'Car Insurance';
    const expenseAmount= 2500;
    const expenseLocation= 'New Delhi'; 
    return ( 
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__location'>{expenseLocation}</div>
            <div className='expense-item__price'>Rs {expenseAmount}</div>
            
        </div>
    </div>
    )
}


export default ExpenseItem;