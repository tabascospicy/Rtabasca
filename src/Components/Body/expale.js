<Route  render={({ location, ...rest }) => (
            <Transition native
                items={location}
                keys={location.pathname.split('/')[2]}
                from={{ transform: 'translateX(200px)', opacity: 0 }}
                enter={{ transform: 'translateX(0px)', opacity: 1 }}
                leave={{ transform: 'translateX(-200px)', opacity: 0 }}
            >
                {(loc, state) => style => (
                    <Switch location={state === 'update' ? location : loc}>
                        <Route exact path="/Blog" render={props => <About {...props} style={style} />} />
                        <Route path="/Graphics" render={props => <Proyects {...props} style={style} />} />
                    </Switch>
                )}
            </Transition>
)} 
/>