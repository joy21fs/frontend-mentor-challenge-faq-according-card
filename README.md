# frontend-mentor-challenge-faq-according-card

### Links

- Solution URL: 
- Live Site URL: 


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Table
- Mobile-first workflow


### What I learned

- when using {visibility: collapse} with table rows, the row disappears as if we set {display: none} to it.
-in order to make space between <tr>s, i can add padding to the <td>
-i can put an image as <td> by simply wrapping <img>inside<td></td>

- box-shadow:
  /_ offset-x | offset-y | blur-radius | spread-radius | color _/
  
  box-shadow: 0 2rem 5rem -3rem var(--shadow);
  the bigger the value of the blur-radius is would make the shadow bigger and lighter; if the value of the spread-radius is negative, the shadow would shrink. (I used the negative spread-radius along with offset-y to make the shadow only appears on the bottom side.)

- linear-gradient:
  background: linear-gradient(0deg, var(--Soft-blue), 20%, var(--Soft-violet));
  0deg means gradient goes from bottom to top; the percentage is at which length does the color start to change

- to create a "sticky footer" with {position: absolute}, i need to specifically add {position: relative} to the body element

- ::before and ::after are child elements so if the parent has property that makes children sit in middle it will apply to the pseudo elements as well.
