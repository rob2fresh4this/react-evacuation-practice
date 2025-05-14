# 🚀 Next.js Evaluations Prep  

Welcome to your Next.js evaluations prep! This repository includes a series of essential React component exercises designed to strengthen your understanding of state management, effects, and hooks.  

## 📚 Evaluations  

1. Toggle Button: Create a button that toggles between "Show" and "Hide" text when clicked.  
2. Counter: Build a simple counter with "+" and "-" buttons to increase and decrease a number.  
3. Character Limit: Make an input that counts the number of characters as you type.  
4. Theme Switcher: Add a button that switches the background color between light and dark.  
5. Auto Increment: Create a counter that automatically increments by 1 every second.  
6. Component Mount: Use `useEffect` to log a message when the component mounts.  
7. Cleanup Effect: Create a timer that stops when the component unmounts.  
8. Conditional Effect: Trigger a console log only when the counter hits 5.  
9. Button Click Counter: Track how many times a button has been clicked.  
10. Toggle Class: Add a button that toggles a CSS class to change the text color.  

## 💡 Hints  

- **Toggle Button:** Use a boolean `useState` variable and the `!` operator to flip its value.  
- **Counter:** Use `useState` for the count and two separate `onClick` handlers for each button.  
- **Character Limit:** Use `onChange` to update the state with the input's current length.  
- **Theme Switcher:** Toggle a state that controls a CSS class or inline style.  
- **Auto Increment:** Use `useEffect` with `setInterval`, and remember to clear the interval when the component unmounts.  
- **Component Mount:** Use an empty dependency array to ensure it only runs once.  
- **Cleanup Effect:** Return a cleanup function from `useEffect` to clear the timer.  
- **Conditional Effect:** Use a dependency array to track the counter and a conditional check inside the effect.  
- **Button Click Counter:** Increment a state variable every time the button is clicked.  
- **Toggle Class:** Use state to manage the active class and toggle it on button click.  

## 📝 How to Submit  

Please place your answers inside the `pages` directory, naming each file as `Problem1.js`, `Problem2.js`, ..., up to `Problem10.js`.  

## 🌳 Solutions  

The complete solutions for these exercises can be found on the **`solutions`** branch. Be sure to give them a shot on your own before checking the answers! 💥  

---

Ready to sharpen your Next.js skills? Let's get started! 💥
