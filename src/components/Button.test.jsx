import { describe, expect,it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe('Button Component Test',()=>{
    
    it('button renders',()=>{
        render(<Button>btn</Button>)
        expect(screen.getByRole('button',{ name : 'btn'})).toBeInTheDocument();
    })

    it('button should run onClick', async()=>{
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<Button onClick={onClick}>btn</Button>)
        const btn = screen.getByRole('button',{ name : 'btn' });
        await user.click(btn);

        expect(onClick).toBeCalled();
    })


    it('button should not run onClick', async()=>{
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(<Button type="submit" onClick={onClick}>btn</Button>)
        const btn = screen.getByRole('button',{ name : 'btn' });
        await user.click(btn);
        expect(onClick).not.toBeCalled();
    })

})