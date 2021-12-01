const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  // simplified using spread operator

  const handleLeftClick = () => {
    const newClicks = { 
    ...clicks,
      left: clicks.left + 1
      
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  // remove assign object to variable

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => { 
    setClicks({...clicks, right: clicks.right + 1})
  }